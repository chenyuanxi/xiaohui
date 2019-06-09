function SMS () {
  this.value = 123456,
  this.config = function (phone) {
    return {
      mobile: phone,
      tpl_id: 155149,
      tpl_value: '#code#=' + this.value,
      key: 'b15df74a4df857f9ab0d39d21493c94c'
    }
  }
}
SMS.prototype.setRandomSMS = function () {
  this.value = Math.floor(Math.random() * 899999 + 100000)
}
SMS.prototype.setInitSMS = function () {
  this.value = ''
}
const sms = new SMS()

module.exports = sms
