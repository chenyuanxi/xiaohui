<template>
  <div class="wrap">
    <div class="top">
      <div class="signRegisterWrap">
        <div class="headPic">
          <div class="headIcon">
            <span class="iconfont icon-wode"></span>
          </div>
        </div>
        <div class="signRegister">
          <p>登录/注册</p>
          <p class="addInfo"><span class="iconfont icon-rili"></span>签到领积分</p>
        </div>
        <div class="topRight">
          <span class="iconfont icon-xiaoxi"></span>
          <span class="iconfont icon-shezhi"></span>
        </div>
      </div>
      <div class="offers">
        <div class="row">
          <div class="col">
            <p>-</p>
            <p>积分</p>
          </div>
          <div class="col">
            <p>-</p>
            <p>优惠券</p>
          </div>
          <div class="col">
            <p>-</p>
            <p>代金券</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
p{
  margin: 0;
  padding: 0;
}
.wrap{
  background: #f8f8f8;
}
.top{
  height: 208px;
  position: relative;
  color: #fff;
}
.topRight{
  position: absolute;
  top: 8px;
  right: 1rem;
}
.topRight .iconfont{
  font-size: 1.6rem;
}
.signRegisterWrap{
  height: 200px;
  padding: 50px 0 0 30px;
  border-radius: 0 0 80px 80px;
  background: #e1272e;
}
.headIcon, .signRegister{
  float: left;
}
.headIcon{
  width: 3.6rem;
  height: 3.6rem;
  margin-top: 2px;
  margin-right: 3px;
  background: rgba(255, 255, 255, 0.726);
  border-radius: 2rem;
}
.headIcon .icon-wode{
  font-size: 2.6rem;
  margin-left: 8px;
}
.signRegister{
  font-size: 1.3rem;
}
.signRegister .addInfo{
  display: inline-block;
  font-size: 0.8rem;
  border-radius: 8px;
  padding: 2px 6px;
  background: #cf322c;
}
.offers{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 96%;
  height: 66px;
  padding: 0.6rem 1rem;
  box-sizing: border-box;
  background: #fff;
  color: #000;
  font-size: 0.9rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 6px 1px rgb(238, 234, 234);
  text-align: center;
}
.offers .col{
  position: relative;
}
.offers .col:not(:last-child)::after{
  content: '';
  display: inline-block;
  height: 1.6rem;
  border-right: 1px solid #d8d3d3;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-30%)
}
</style>
