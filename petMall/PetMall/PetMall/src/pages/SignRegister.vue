<template>
  <div>
    <div class="top">
      <p @click="goBack">&lt;返回</p>
    </div>
    <div>
      <div class="header">宠物乐园</div>
      <div class="body">
        <div class="option">
          <div class="sign"  v-bind:class="{ addBorder: swich }" @click="sgin">账号登录</div>
          <div class="register" v-bind:class="{ addBorder: !swich }" @click="register">立即注册</div>
        </div>
        <Sign v-if="swich"/>
        <Register v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import Sign from '../components/SignRegisterPart/Sign'
import Register from '../components/SignRegisterPart/Register'

export default {
  name: 'SignRegister',
  components: {
    Sign,
    Register
  },
  data () {
    return {
      swich: true
    }
  },
  methods: {
    sgin () {
      if (this.swich === false) {
        this.swich = true
      }
    },
    register () {
      if (this.swich === true) {
        this.swich = false
      }
    },
    goBack () {
      window.history.length > 1 ? this.$router.back() : this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.top{
  margin: 8px;
  font-size: 18px;
}
.header{
  margin: 26px 0;
  text-align: center;
  font-size: 36px;
  font-weight: 200;
}
.option{
  text-align: center;
}
.sign{
  margin-right: 10px;
}
.sign,.register{
  display: inline-block;
}
.addBorder{
  border-bottom: 2px solid #999;
}
</style>
