<template>
  <header>
    <div class="logo">宠物乐园</div>
    <div class="search">
      <input type="text" class="text" placeholder="搜索商品">
      <span class="iconfont icon-chazhao"></span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  height: 36px;
  background: #fff;
  line-height: 36px;
  overflow: hidden;
}
.logo{
  float:left;
  margin-left: 10px;
}
.search{
  float: right;
  position: relative;
  padding:0 10px;
  margin-top: -2px;
  margin-right: 10px;
}
.search input{
  width: 100px;
  height: 22px;
  padding-left: 10px;
  padding-right: 22px;
  outline: none;
  border: 1px solid #999;
  border-radius: 10px;
}
.search span{
  font-size: 20px;
  position: absolute;
  top: 0;
  right: 12px;
}
</style>
