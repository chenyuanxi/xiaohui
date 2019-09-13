<template>
  <div class="wrap">
    <div>
      <div class="row">
        <router-link to="/home" class="col a" :class="{on: $route.path=='/home'}">
          <div class="iconfont icon-shouye"></div>
          <div class="text">首页</div>
        </router-link>
        <router-link to="/class" class="col a" :class="{on: $route.path=='/class'}">
          <div class="iconfont icon-leimupinleifenleileibie"></div>
          <div class="text">分类</div>
        </router-link>
        <router-link to="/my" class="col a" :class="{on: $route.path=='/my'}">
          <div class="iconfont icon-wode"></div>
          <div class="text">我的</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
.a {
  text-decoration: none;
  color: #999;
}
a:hover {
  text-decoration: none;
}
.wrap {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  background: #fff;
}
.on {
  color: #f53b3b !important;
}
.iconfont {
  font-size: 1.3rem;
  height: 25px;
  overflow: hidden;
}
</style>
