<template>
  <div class="classPage">
    <div class="header">
      <header>
        <div class="top-search">
          <span class="iconfont icon-sousuo"></span>
          <UpDownScroll/>
        </div>
      </header>
    </div>
    <div class="main">
      <el-tabs :tab-position="tabPosition" :style="mainHeight">
        <el-tab-pane label="为你推荐">
          <Recommend/>
        </el-tab-pane>
        <el-tab-pane label="华为手机">华为手机</el-tab-pane>
        <el-tab-pane label="荣耀手机">荣耀手机</el-tab-pane>
        <el-tab-pane label="智慧屏">智慧屏</el-tab-pane>
        <el-tab-pane label="笔记本&电脑">为你推荐</el-tab-pane>
        <el-tab-pane label="智能穿戴">华为手机</el-tab-pane>
        <el-tab-pane label="智能家居">荣耀手机</el-tab-pane>
        <el-tab-pane label="专属配件">智慧屏</el-tab-pane>
        <el-tab-pane label="通用配件">为你推荐</el-tab-pane>
        <el-tab-pane label="生态产品">华为手机</el-tab-pane>
        <el-tab-pane label="增值服务">荣耀手机</el-tab-pane>
        <el-tab-pane label="智能计算">智慧屏</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import UpDownScroll from '../components/Home/UpDownScroll'
import Recommend from '../components/Class/Recommend'
export default {
  components: {
    UpDownScroll,
    Recommend
  },
  computed: {
    mainHeight () {
      return 'height:' + (this.winHeight - 86) + 'px;'
    }
  },
  data () {
    return {
      tabPosition: 'left',
      winHeight: window.innerHeight
    }
  }
}
</script>
<style>
.classPage .header{
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 10;
}
.classPage header{
  background: #fff;
  padding: 5px 6px;
}
.classPage .top-search{
  position: relative;
  height: 1.6rem;
  background: #fff6f6;
}
.classPage .icon-sousuo{
  position: absolute;
  top: 50%;
  color: #999;
  transform: translate(50%,-50%);
  font-size: 0.8rem;
}
.classPage{
  height: 100%;
}
.classPage .main{
  margin-top: 36px;
}
.classPage .el-tabs--left .el-tabs__item.is-left {
  text-align: center;
}
.classPage .el-tabs__item.is-active {
  color: #f34d2f;
  background: #fff8f8;
}
.classPage .el-tabs__item{
  height: 50px;
  line-height: 50px;
  padding: 0 0.6rem;
}
.classPage .el-tabs__item:hover{
  color: #f34d2f;
}
.classPage .el-tabs__active-bar{
  background-color: #f77760;
  height: 50px;
}
.classPage .el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable{
  padding: 0;
}
.classPage .el-tabs__nav-scroll {
  overflow: scroll;
}
/* 去掉滚动条 */
.classPage .el-tabs__nav-scroll::-webkit-scrollbar{
  display: none;
}
.classPage .el-tabs__nav-prev, .el-tabs__nav-next{
  display: none;
}
</style>
