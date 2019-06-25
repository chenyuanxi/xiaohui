<template>
  <div>
    <div :class="{personal: isShow}">
      <Title message="个人中心">
        <div slot="left">></div>
      </Title>
      <div v-if="isShow">
        <div v-if="isSign" class="logged">
          <span class="iconfont icon-denglu signImg"></span>
          <p class="describe">
            <span>{{user.name}}</span>
            <br>
            <span>
              <span class="iconfont icon-shouji"></span>
              {{user.phone}}
            </span>
          </p>
        </div>
        <div v-else>
          <div class="notLogged" @click="goSignRegister('/SignRegister')">
            <span class="iconfont icon-denglu signImg"></span>
            <p class="describe">
              <span>登录/注册</span>
              <br>
              <span>
                <span class="iconfont icon-shouji"></span>点击这里
              </span>
            </p>
            <div class="right">></div>
          </div>
        </div>
        <div class="account-info">
          <div>
            <p>{{userInfo.balance||0.00}}元</p>
            <p>我的余额</p>
          </div>
          <div>
            <p>{{userInfo.integral||0}}分</p>
            <p>我的积分</p>
          </div>
          <div>
            <p>{{userInfo.discount||0}}个</p>
            <p>我的优惠</p>
          </div>
        </div>
        <div class="functionList">
          <FunctionCard funtionName="我的订单">
            <div slot="left">
              <span class="iconfont icon-shouji"></span>
            </div>
          </FunctionCard>
          <FunctionCard funtionName="积分商城">
            <div slot="left">
              <span class="iconfont icon-shouji"></span>
            </div>
          </FunctionCard>
          <FunctionCard funtionName="会员卡">
            <div slot="left">
              <span class="iconfont icon-shouji"></span>
            </div>
          </FunctionCard>
          <FunctionCard funtionName="服务中心">
            <div slot="left">
              <span class="iconfont icon-shouji"></span>
            </div>
          </FunctionCard>
        </div>
      </div>
      <Loading v-else/>
    </div>
    <div class="logOut" v-show="isSign" @click="logOut">退出登录</div>
  </div>
</template>

<script>
import FunctionCard from '../components/PersonalPart/FunctionCard'
import Title from '../components/Header/Title'
import api from '../api/index'
import Loading from '../components/Function/Loading'
export default {
  name: 'Personal',
  components: {
    Title,
    FunctionCard,
    Loading
  },
  data: function () {
    return {}
  },
  computed: {
    user: function () {
      return this.$store.state.getUserInfo.user
    },
    userInfo: function () {
      return this.$store.state.getUserInfo.userInfo
    },
    state: function () {
      return this.$store.state.getUserInfo.code
    },
    isSign: function () {
      if (this.user.phone) {
        return true
      }
      return false
    },
    isShow: function () {
      if (this.state === 1 || this.state === 0) {
        return true
      }
      return false
    }
  },
  methods: {
    goSignRegister (path) {
      this.$router.push(path)
    },
    async logOut () {
      await api.logOut()
      this.$store.dispatch('getUserInfo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personal {
  background: rgb(241, 239, 239);
}
.logged,
.notLogged {
  height: 100px;
  padding-right: 10px;
  line-height: 100px;
  background: cyan;
}
.signImg {
  float: left;
  font-size: 60px;
  color: #fff;
}
.icon-shouji {
  font-size: 20px;
  margin: 3px 0 0 -3px;
}
.describe {
  float: left;
  line-height: 25px;
  margin-top: 28px;
}
.right {
  float: right;
}
.account-info {
  display: flex;
  padding-top: 6px;
  text-align: center;
  line-height: 20px;
  background: #fff;
}
.account-info > div {
  flex: 1;
  border-right: 1px solid #dad7d7;
}
.functionList {
  margin-top: 8px;
}
.logOut {
  margin-top: 30px;
  background: #dad7d7;
  letter-spacing: 6px;
  text-align: center;
  line-height: 28px;
}
.loading-text{
  padding: 10px 6px;
}
</style>
