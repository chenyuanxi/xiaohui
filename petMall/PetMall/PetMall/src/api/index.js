import ajax from './ajax'

export default {
  // 注册
  register: function (data) {
    return ajax('/register', 'POST', data)
  },
  // 获取短信验证码
  sendSMS: function (data) {
    return ajax('/sms', 'POST', data)
  },
  // 登录
  sign: function (data) {
    return ajax('/sign', 'POST', data)
  },
  // 登出
  logOut: function (data) {
    return ajax('/logOut', 'POST', data)
  },
  // 获取用户信息
  getUserInfo: function (data) {
    return ajax('/userInfo', 'POST', data)
  },
  // 获取新闻列表
  getNews: function () {
    return ajax('/news', 'GET')
  },
  // 获取商品列表
  getGoods: function () {
    return ajax('/goods', 'POST')
  },
  // 根据id获取某个商品详细信息
  getGoodsDetails: function (data) {
    return ajax('/goodsDetails', 'POST', data)
  },
  // 获取公共信息
  getPublicInfo: function () {
    return ajax('/publicInfo', 'POST')
  },
  // 模糊查询商品
  findGoods: function (data) {
    return ajax('/findGoods', 'POST', data)
  },
  // 保存购物车
  addToCart: function (data) {
    return ajax('/addToCart', 'POST', data)
  },
  // 获取购物车信息
  getShopCart: function (data) {
    return ajax('/getShopCart', 'POST', data)
  },
  // 更新购物车信息
  updateCart: function (data) {
    return ajax('/updateCart', 'POST', data)
  },
  // 获取商品评价
  getEvaluate: function (data) {
    return ajax('/shopEvaluate', 'POST', data)
  }
}
