<template>
  <div class="wrap">
    <div class="row top">
      <div class="col"><span class="iconfont icon-anonymous-iconfont"></span>官方商城</div>
      <div class="col"><span class="iconfont icon-anonymous-iconfont"></span>正品保障</div>
      <div class="col"><span class="iconfont icon-anonymous-iconfont"></span>售后无忧</div>
    </div>
    <ul class="row nav">
      <li class="col">
        <div>
          <img src="../../assets/nav/1.gif">
        </div>
        <div>华为专区</div>
      </li>
      <li class="col">
        <div>
          <img src="../../assets/nav/2.gif">
        </div>
        <div>荣耀专区</div>
      </li>
      <li class="col">
        <div>
          <img src="../../assets/nav/3.gif">
        </div>
        <div>领券中心</div>
      </li>
      <li class="col">
        <div>
          <img src="../../assets/nav/4.gif">
        </div>
        <div>数码惠</div>
      </li>
      <li class="col">
        <div>
          <img src="../../assets/nav/5.gif">
        </div>
        <div>拼团</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Nav'
}
</script>
<style scoped>
.wrap{
  padding-bottom: 1rem;
  background: #fff;
  text-align: center;
  color: #999;
}
.top{
  font-size: 12px;
}
.nav{
  margin-top: 0.5rem;
  font-size: 14px;
}
.nav li div{
  white-space: nowrap;
}
img{
  width: 2.2rem;
}
.col div{
  margin-top: 6px;
}
</style>
