<template>
  <div>
    <div class="order">
      <div class="row">
        <div class="col">
          <h2 class="title">我的订单</h2>
        </div>
        <div class="col">
          <p class="otherOrder">全部订单></p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p><span class="iconfont icon-daifukuan"></span></p>
          <p>待付款</p>
        </div>
        <div class="col">
          <p><span class="iconfont icon-daishouhuo"></span></p>
          <p>待收货</p>
        </div>
        <div class="col">
          <p><span class="iconfont icon-daipingjia"></span></p>
          <p>待评价</p>
        </div>
        <div class="col">
          <p><span class="iconfont icon-tuikuan"></span></p>
          <p>退换/退款</p>
        </div>
      </div>
      <AdvertShow/>
    </div>
  </div>
</template>
<script>
import AdvertShow from './AdvertShow'
export default {
  components: {
    AdvertShow
  }
}
</script>
<style scoped>
p{
  white-space: nowrap;
  text-align: center;
  font-size: 0.8rem;
  margin: 6px 0;
}
.iconfont{
  font-size: 1.2rem;
  font-weight: 900;
  color: #999;
}
.order{
  width: 96%;
  margin: 8px auto;
  padding: 8px;
  box-shadow: 0 0 6px 1px rgb(238, 234, 234);
  border-radius: 10px;
  background: #fff;
}
.title{
  font-size: 1rem;
  font-weight: 100;
  text-align: left;
  margin-bottom: 0.9rem;
}
.otherOrder{
  font-size: 0.8rem;
  color: #999;
  text-align: right;
}
</style>
