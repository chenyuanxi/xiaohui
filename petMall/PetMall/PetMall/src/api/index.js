import ajax from './ajax'

export default {
  // 获取新闻列表
  getNews: function () {
    return ajax('/api/news', 'GET')
  },
  // 获取短信验证码
  sendSMS: function (data) {
    return ajax('/api/sms', 'POST', data)
  },
  // 注册
  register: function (data) {
    return ajax('/api/register', 'POST', data)
  },
  // 登录
  sign: function (data) {
    return ajax('/api/sign', 'POST', data)
  },
  // 获取用户信息
  getUserInfo: function (data) {
    return ajax('/api/userInfo', 'POST', data)
  },
  // 登出
  logOut: function (data) {
    return ajax('/api/logOut', 'POST', data)
  }
}
