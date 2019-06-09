<template>
  <div class="signContent">
    <div class="account" :class="{'set-border': isFocus==='phone'}">
      <span>手机号</span>
      <input type="text" v-model="phone" @focus="focus('phone')" @blur="noFocus();check()">
    </div>
    <div class="paasword" :class="{'set-border': isFocus==='password'}">
      <span>密&emsp;码</span>
      <input type="password" v-model="password" @focus="focus('password')" @blur="noFocus">
    </div>
    <div class="sms" :class="{'set-border': isFocus==='sms'}">
      <span>验证码</span>
      <input type="text" v-model="sms" @focus="focus('sms')" @blur="noFocus">
      <div>
        <img :src="imgSrc" class="smsImg" alt="验证码" @click="refImg"/>
      </div>
    </div>
    <span v-show="tip" class="tip">{{message}}</span>
    <button class="signButton" @click="sign">登录</button>
  </div>
</template>

<script>
import api from '../../api/index.js'

export default {
  data: function () {
    return {
      imgSrc: 'http://localhost:3000/captcha',
      isFocus: '',
      password: '',
      phone: '',
      sms: '',
      tip: false,
      message: ''
    }
  },
  computed: {
    userInfo: function () {
      return this.$store.state.userInfo
    },
    isCorrect: function () {
      return /^1[34578][0-9]{9}$/.test(this.phone)
    }
  },
  methods: {
    sign: async function () {
      if (!this.isCorrect) {
        this.message = '*格式有误'
        return
      }
      if (!this.phone || !this.password || !this.sms) {
        this.tip = true
        this.message = '*信息不全'
        return
      }
      const response = await api.sign({
        phone: this.phone,
        password: this.password,
        sms: this.sms
      })
      if (response.code === 1) {
        this.tip = true
        this.message = response.message
        this.refImg()
      } else if (response.code === 0) {
        // this.$store.dispatch('getUserInfo')
        this.$router.replace('/Personal')
        this.$router.go(0)
      }
    },
    focus: function (param) {
      this.isFocus = param
    },
    noFocus: function () {
      this.isFocus = ''
    },
    check: function () {
      if (!this.isCorrect && this.phone) {
        this.message = '*手机格式错误'
        this.tip = true
      } else {
        this.tip = false
      }
    },
    refImg: function () {
      this.imgSrc += '?' + Math.random()
    }
  }
}
</script>

<style scoped>
.signContent {
  position: relative;
  width: 66%;
  margin: 20px auto;
}
.signContent input {
  float: right;
  margin-top: 6px;
  border: none;
  width: 76%;
}
.account,
.sms,
.paasword{
  height: 30px;
  padding: 2px;
  line-height: 30px;
  border: 1px solid #ccc8c8;
}
.paasword,.sms{
 border-top: none;
}
.sms{
  position: relative;
}
.sms input{
  position: absolute;
  top: 2px;
  right: 38%;
  width: 38%;
}
.smsImg{
  position: absolute;
  top: 0;
  right: 0;
  width: 36%;
  height: 80%;
}
.set-border{
  box-shadow: #ccc8c8 0 0 0 1px inset;
}
.signButton {
  width: 100%;
  margin-top: 20px;
  padding: 10px 0;
  border: none;
  letter-spacing: 6px;
  background: #d3d3cc;
  border-radius: 1px;
}
.tip{
  position: absolute;
  display: block;
  width: 100%;
  margin-top: 3px;
  font-size: 14px;
  color: #999;
  text-align: right;
}
</style>
