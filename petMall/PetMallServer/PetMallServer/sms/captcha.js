var svgCaptcha = require('svg-captcha')

var Captcha = function () {
}

Captcha.prototype.getCode = function (req, res) {
  var codeConfig = {
      size: 5,// 验证码长度
      ignoreChars: '0o1iI', // 验证码字符中排除 0o1iI
      noise: 2, // 干扰线条的数量
      height: 44 
  }
  var captcha = svgCaptcha.create(codeConfig);
  req.session.captcha = captcha.text.toLowerCase()
  res.type('svg');
  res.send(captcha.data);
}

const captcha = new Captcha()
module.exports = captcha