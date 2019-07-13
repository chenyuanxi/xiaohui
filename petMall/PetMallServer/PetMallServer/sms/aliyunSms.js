const Core = require('@alicloud/pop-core');

function SMS () {
  this.config = function (phone, value) {
    return {
      "PhoneNumbers": phone,
      "SignName": "宠物乐园",
      "TemplateCode": "SMS_166975200",
      "TemplateParam": "{'code':"+value+"}"
    }
  },
  this.requestOption = {
    method: 'POST'
  },
  this.client = new Core({
    accessKeyId: 'LTAI8llAWJwKWO76',
    accessKeySecret: 'x5g8MfsBN4DKvcxgzggXX52KKXGeEl',
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25'
  })
}

SMS.prototype.sendSms = function (req, res) {
  let value = Math.floor(Math.random() * 899999 + 100000)
  req.session.sms = value
  this.client.request('SendSms', this.config(req.body.phone, value), this.requestOption)
    .then(() => {
      res.send('发送成功')
    }, (ex) => {
      res.send(ex)
    })
}

const sms = new SMS()
module.exports = sms
