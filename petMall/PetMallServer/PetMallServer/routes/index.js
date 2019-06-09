var express = require('express');
var router = express.Router();
var ajax = require('../api/ajax')
var DB = require('../data/index')
var sms = require('../sms/aliyunSms')
var captcha = require('../sms/captcha')

// 连接数据库
const url = 'mongodb://localhost:27017';
const dbName = 'petMall';
const collectionName = 'user'
var db = new DB(url, dbName, collectionName)

// 根据获取新闻列表
router.get('/news', function (req, res) {
  ajax('http://api.komavideo.com/news/list')
    .then(data => {
      res.send(data)
    })
});

// 图形验证码
router.get('/captcha', function (req, res) {
  captcha.getCode(req, res)
});

// 获取短信验证码
router.post('/sms', function (req, res) {
  if (req.body.phone) {
    sms.setRandomSMS()
    sms.sendSms(req.body.phone).then(() => {
      res.send('发送成功')
    }, (ex) => {
      res.send(ex)
    })
  }
});

// 注册
router.post('/register',async function(req, res) {
  // 检查验证码
  if (!req.body.sendSms && (sms.value.toString() !== req.body.sendSms)) {
    res.send({code: 1, message: '验证码错误'})
    return;
  }
  // 检查手机号是否已被注册
  let result = await db.find({phone: req.body.phone})
  if (result.length !== 0) {
    res.send({code: 1, message: '手机号已被注册'})
    return; 
  }
  // 添加数据到数据库
  await db.insertOne({phone: req.body.phone, password: req.body.password, name: req.body.name})
  res.send({code: 0, message: '注册成功'})
  sms.setInitSMS()
});

// 登录
router.post('/sign', async function(req, res) {
  if (req.body.sms.toLowerCase() !== captcha.captchaText.toLowerCase()) {
    res.send({code: 1, message: '验证码错误'})
    return
  }
  let result = await db.find({phone: req.body.phone})
  if (result.length === 0 ) {
    res.send({code: 1, message: '账号不存在'})
    return
  }
  if (req.body.password === result[0].password) {
    req.session.userPhone = req.body.phone
    res.send({code: 0, message: '登录成功',phone: req.session.userPhone})
  } else {
    res.send({code: 1, message: '密码错误'})
  }
});

// 获取用户信息
router.post('/userInfo',async function(req, res) {
  req.session.userPhone = req.body.userPhone
  if (req.session.userPhone) {
    db.collectionName = 'user'
    let user = await db.find({phone: req.session.userPhone})
    db.collectionName = 'userInfo'
    let userInfo = await db.find({phone: req.session.userPhone})
    res.send({
      user: user,
      userInfo: userInfo,
      code: 0
    })
  } else {
    res.send({
      userInfo: {phone: '', name: ''},
      code: 1
    })
  }
});


// 退出登录
router.post('/logOut', function(req, res) {
  delete req.session.userPhone
  res.end()
});


module.exports = router;
