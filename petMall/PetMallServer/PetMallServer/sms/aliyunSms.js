const Core = require('@alicloud/pop-core');

function SMS () {
  this.value = '',
  this.config = function (phone) {
    return {
      "PhoneNumbers": phone,
      "SignName": "宠物乐园",
      "TemplateCode": "SMS_166975200",
      "TemplateParam": "{'code':"+this.value+"}"
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

SMS.prototype.setRandomSMS = function () {
  this.value = Math.floor(Math.random() * 899999 + 100000)
}
SMS.prototype.setInitSMS = function () {
  this.value = ''
}
SMS.prototype.sendSms = function (phone) {
  return this.client.request('SendSms', this.config(phone), this.requestOption)
}

const sms = new SMS()
module.exports = sms



