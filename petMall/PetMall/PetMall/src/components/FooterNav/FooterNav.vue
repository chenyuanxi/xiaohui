<template>
  <footer>
    <div class="footer-item" :class="{on:'/home'===$route.path}" @click="jump('/home')">
      <div class="iconfont icon-shouye"></div>
      <span>首页</span>
    </div>
    <div class="footer-item" :class="{on:'/class'===$route.path}" @click="jump('/class')">
      <div class="iconfont icon-fenlei"></div>
      <span>分类</span>
    </div>
    <div class="footer-item cart" :class="{on:'/cart'===$route.path}" @click="jump('/cart')">
      <div class="cartCount" v-show="this.cartCount > 0">{{cartCount > 99 ? '99+':cartCount}}</div>
      <div class="iconfont icon-gouwu"></div>
      <span>购物车</span>
    </div>
    <div class="footer-item" :class="{on:'/personal'===$route.path}" @click="jump('/personal')">
      <div class="iconfont icon-wode"></div>
      <span>我的</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterNav',
  methods: {
    jump (path) {
      this.$router.push(path)
    }
  },
  computed: {
    cartCount: function () {
      return this.$store.state.shopCartCount
    }
  }
}
</script>

<style scoped>
.on{
  color: #363634;
}
footer {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  border-top: 1px solid #999;
  color: #999;
  background-color: #f7f1f1;
  text-align: center;
}
.iconfont{
  font-size: 20px;
}
.footer-item {
  flex: 1;
}
.cart{
  position: relative;
}
.cartCount{
    position: absolute;
    top: 0;
    left: 53%;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: #f59221;
    font-size: 14px;
    color: #757070;
  }
</style>
