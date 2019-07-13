<template>
  <div class="registerContent">
    <div>
      <span>用户名</span>
      <input type="text" v-model="name" @blur="tip('name')">
      <span v-show="nameTip" class="tip">*请使用2-10位的数字、英文或中文字符</span>
    </div>
    <div>
      <span>手机号</span>
      <input type="text" v-model="phone" @blur="tip('phone')">
      <span v-show="phoneTip" class="tip">*手机号格式错误</span>
    </div>
    <div class="sms">
      <span>验证码</span>
      <input type="text" v-model="sms" id="inputSms">
      <span class="getCheck" :class="{changeGetCheck: isPhoneChange, disable: isDisable}" @click="getSMS" v-cloak>{{SMStext}}</span>
    </div>
    <!-- <div class="check">
      <span>验证码</span>
      <span class="check-wrap" :class="{'check-wrap-border': isFocus}">
        <input type="text" v-model="sms" @focus="isFocus=true" @blur="isFocus=false">
        <span class="getCheck" :class="{changeGetCheck: isPhoneChange, disable: isDisable}" @click="getSMS" v-cloak>{{SMStext}}</span>
      </span>
    </div> -->
    <div>
      <span>密码</span>
      <input type="password" v-model="password" @blur="tip('passwordTip')">
    </div>
    <div>
      <span>确认密码</span>
      <input type="text" v-model="confirmPassword" @blur="tip('passwordTip')">
      <span v-show="passwordTip" class="tip">*两次密码不一致</span>
    </div>
    <div>
      <span class="tip">{{info}}</span>
      <button class="registerButton" @click="register">立即注册</button>
    </div>
  </div>
</template>

<script>
import api from '../../api/index.js'
export default {
  data () {
    return {
      name: '',
      phone: '',
      sms: '',
      password: '',
      confirmPassword: '',
      count: 60,
      SMStext: '获取验证码',
      isFocus: false,
      isDisable: false,
      nameTip: false,
      phoneTip: false,
      passwordTip: false,
      random: '',
      info: ''
    }
  },
  computed: {
    isPhoneChange: function () {
      return /^1[34578]\d{9}$/.test(this.phone)
    },
    isNameChange: function () {
      return /^[a-zA-Z0-9\u4e00-\u9fa5]{2,5}$/.test(this.name)
    }
  },
  methods: {
    // 注册
    async register () {
      this.info = ''
      if (this.phoneTip || this.passwordTip) {
        this.info = '*格式有误'
        return
      }
      if (!this.sms || !this.phone || !this.password || !this.confirmPassword) {
        this.info = '*信息填写不完整'
        return
      }
      const response = await api.register({
        name: this.name,
        phone: this.phone,
        password: this.password,
        sendSms: this.sms
      })
      if (response.code) {
        this.info = response.message
        if (response.code === 0) {
          this.$router.go(0)
        }
      } else {
        this.info = '服务器好像出问题了~'
      }
    },
    // 验证格式
    tip (key) {
      switch (key) {
        case 'name':
          if (!this.isNameChange && this.name) {
            this.nameTip = true
          } else {
            this.nameTip = false
          }
          break
        case 'phone':
          if (!this.isPhoneChange && this.phone) {
            this.phoneTip = true
          } else {
            this.phoneTip = false
          }
          break
        case 'passwordTip':
          if (this.password !== this.confirmPassword && this.confirmPassword) {
            this.passwordTip = true
          } else {
            this.passwordTip = false
          }
          break
        default:
          console.log('赞美太阳')
          break
      }
    },
    // 获取验证码
    getSMS () {
      this.isDisable = true
      this.SMStext = '已发送' + '(' + this.count + 's)'
      const time = setInterval(() => {
        this.count--
        this.SMStext = '已发送' + '(' + this.count + 's)'
        if (this.count === 0) {
          clearInterval(time)
          this.count = 60
          this.SMStext = '获取验证码'
          this.isDisable = false
        }
      }, 1000)
      api.sendSMS({
        phone: this.phone
      }).then(function (response) {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>
.registerContent{
  width: 80%;
  margin: 0 auto;
}
.registerContent>div{
  height: 20px;
  padding-right: 50px;
  margin-top: 26px;
  text-align: right;
}
.registerContent input{
  width: 66%;
  height: 25px;
  padding: 0 2px;
  box-sizing: border-box;
  border: 1px solid #ccc8c8;
}
input:focus{
  border-color: #999;
}
#inputSms{
  padding-right: 80px;
  box-sizing: border-box;
}
.sms{
  position: relative;
}
.getCheck{
  position: absolute;
  color: #ccc8c8;
  right: 53px;
  top: 5px;
  pointer-events: none;
  font-size: 14px;
}
.check-wrap{
  display: inline-block;
  padding: 1px;
  height: 25px;
  border: 1px solid #ccc8c8;
}
.check-wrap-border{
  border-color: #999;
}
.registerButton{
  width: 80%;
  margin-top: 2px;
  padding: 8px 0;
  border: none;
  letter-spacing: 6px;
  background: #d3d3cc;
  border-radius: 1px;
}
.changeGetCheck{
  color: #7c7777;
  pointer-events: auto;
}
.disable{
  pointer-events: none;
}
.tip{
  display: block;
  height: 14px;
  padding-top: 2px;
  font-size: 12px;
  color: #999;
}
</style>
