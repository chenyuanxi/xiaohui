var express = require('express');
var router = express.Router();
var ajax = require('../api/ajax')
var DB = require('../data/index')
var sms = require('../sms/aliyunSms')
var captcha = require('../sms/captcha')
var ObjectID = require('mongodb').ObjectID
var userShopCart = require('../mongodbModel/model/userShopCart')
var shopEvaluate = require('../mongodbModel/model/shopEvaluate')

// 连接数据库
const url = 'mongodb://localhost:27017';
const dbName = 'petMall';

// 根据获取新闻列表
router.get('/news', function (req, res) {
  ajax('http://api.komavideo.com/news/list')
    .then(data => {
      res.send(data)
    })
});

// 图形验证码
router.get('/captcha', function (req, res) {
  req.session.a = 1
  captcha.getCode(req, res)
});

// 获取短信验证码
router.post('/sms', function (req, res) {
  if (req.body.phone) {
    sms.sendSms(req, res)
  }
});

// 注册
router.post('/register',async function(req, res) {
  // 检查验证码
  let sendSms = req.body.sendSms.toString()
  let sms = req.session.sms.toString()
  if (sms !== sendSms) {
    res.send({code: 1, message: '验证码错误'})
    return;
  }
  // 检查手机号是否已被注册
  let db = new DB(url, dbName, 'user')
  let result = await db.find({phone: req.body.phone})
  if (result.length !== 0) {
    res.send({code: 1, message: '手机号已被注册'})
    return; 
  }
  // 添加数据到数据库
  await db.insertOne({phone: req.body.phone, password: req.body.password, name: req.body.name})
  res.send({code: 0, message: '注册成功'})
});

// 登录
router.post('/sign', async function(req, res) {
  console.log(req.session.a)
  console.log(req.session.captcha)
  let sms = req.body.sms.toLowerCase()
  let captcha = req.session.captcha
  if (sms !== captcha) {
    res.send({code: 1, message: '验证码错误'})
  } else {
    let db = new DB(url, dbName, 'user')
    let result = await db.find({phone: req.body.phone})
    if (result.length === 0 ) {
      res.send({code: 1, message: '账号不存在'})
    } else if (req.body.password.toString() === result[0].password) {
      req.session.userPhone = req.body.phone
      res.send({code: 0, message: '登录成功',phone: req.session.userPhone})
    } else {
      res.send({code: 1, message: '密码错误'})
    }
  }
  // 删除验证码
  // delete req.session.captcha
});

// 退出登录
router.post('/logOut', function(req, res) {
  delete req.session.userPhone
  res.end()
});

// 获取用户信息
router.post('/userInfo',async function(req, res) {
  if (req.session.userPhone) {
    let db = new DB(url, dbName, 'user')
    db.collectionName = 'user'
    let user = await db.find({phone: req.session.userPhone})
    db.collectionName = 'userInfo'
    let userInfo = await db.find({phone: req.session.userPhone})
    res.send({
      user: user[0],
      userInfo: userInfo[0],
      code: 0
    })
  } else {
    res.send({
      user: {phone: '', name: ''},
      userInfo: {},
      code: 1
    })
  }
});

// 获取商品列表
router.post('/goods',async function(req, res) {
  let db = new DB(url, dbName, 'catFood')
  db.collectionName = 'catFood'
  let catFood = await db.find()
  db.collectionName = 'cat'
  let cat = await db.find()
  res.send({
    catFood: catFood,
    cat: cat
  })
});

// 获取某件商品详细信息
router.post('/goodsDetails',async function(req, res) {
  let db = new DB(url, dbName, req.body.type)
  let result = await db.find({'_id': ObjectID(req.body.id)})
  res.send(result[0])
});

// 获取公共信息
router.post('/publicInfo',async function(req, res) {
  let db = new DB(url, dbName, 'publicInfo')
  let publicInfo = await db.find()
  res.send(publicInfo[0])
});

// 模糊查询商品
router.post('/findGoods',async function (req, res) {
  if (req.body.condition) {
    let condition = {}
    condition[req.body.condition.name] = new RegExp(req.body.condition.value)
    console.log(condition)
    let db = new DB(url, dbName, 'catFood')
    db.collectionName = 'catFood'
    let catFood = await db.find(condition, req.body.config)
    db.collectionName = 'cat'
    let cat = await db.find(condition, req.body.config)
    let arry = []
    let goodsList = arry.concat(catFood, cat)
    res.send({
      goodsList: goodsList
    })
  }
});

// 保存购物车
router.post('/addToCart',async function (req, res) {
  if (!req.session.userPhone) {
    return
  }
  let info = req.body.info
  let id = info.goodsItem[0].goodsId
  // 查询表中是否已有对应商品
  let findInfo = await userShopCart.find({phone: info.phone})
  if (findInfo.length > 0) {
    let findGoods = await userShopCart.find({phone: info.phone},{'goodsItem':{$elemMatch:{"goodsId":id}}})
    if (findGoods[0].goodsItem[0]) {
      await userShopCart.updateOne({phone: info.phone,"goodsItem.goodsId":id},{$set:{"goodsItem.$.count":findGoods[0].goodsItem[0].count+info.goodsItem[0].count}})
    } else {
      await userShopCart.updateOne({phone: info.phone, "goodsItem.goodsId": {$ne: id}},{$push: {"goodsItem": info.goodsItem[0]}})
    }
  } else {
    await userShopCart.insertMany(info)
  }
  res.end()
});

// 更新购物车信息
router.post('/updateCart',async function (req, res) {
  let getGoodsItem = req.body.goodsItem
  let phone = req.session.userPhone
  if (!phone) {
    return
  }
  await userShopCart.updateOne({phone: phone},{$set:{"goodsItem": getGoodsItem}})
  res.end()
});

// 获取购物车信息
router.post('/getShopCart',async function (req, res) {
  let phone = req.session.userPhone
  if (!phone) {
    return
  }
  let shopCartInfo = await userShopCart.find({phone: phone})
  res.send(shopCartInfo[0])
});

// 获取商品评价
router.post('/shopEvaluate',async function (req, res) {
  let goodsId = req.body.goodsId
  if (goodsId) {
    let result = await shopEvaluate.find({goodsId: goodsId})
    res.send(result)
  } else {
    res.send({
      message: 暂无评价
    })
  }
});

module.exports = router;
