import ajax from './ajax'

export default {
  // 注册
  register: function (data) {
    return ajax('api/register', 'POST', data)
  },
  // 获取短信验证码
  sendSMS: function (data) {
    return ajax('/api/sms', 'POST', data)
  },
  // 登录
  sign: function (data) {
    return ajax('/api/sign', 'POST', data)
  },
  // 登出
  logOut: function (data) {
    return ajax('/api/logOut', 'POST', data)
  },
  // 获取用户信息
  getUserInfo: function (data) {
    return ajax('/api/userInfo', 'POST', data)
  },
  // 获取新闻列表
  getNews: function () {
    return ajax('/api/news', 'GET')
  },
  // 获取商品列表
  getGoods: function () {
    return ajax('/api/goods', 'POST')
  },
  // 根据id获取某个商品详细信息
  getGoodsDetails: function (data) {
    return ajax('/api/goodsDetails', 'POST', data)
  },
  // 获取公共信息
  getPublicInfo: function () {
    return ajax('/api/publicInfo', 'POST')
  },
  // 模糊查询商品
  findGoods: function (data) {
    return ajax('/api/findGoods', 'POST', data)
  }
}
