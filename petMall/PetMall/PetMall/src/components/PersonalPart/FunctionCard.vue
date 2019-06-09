<template>
  <div class="card">
    <div class="left"><slot name="left"></slot></div>
    <span class="funtionName">{{funtionName}}</span>
    <div class="right">></div>
  </div>
</template>

<script>
export default {
  name: 'FunctionCard',
  props: ['funtionName']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card{
    height: 36px;
    padding: 0 10px;
    margin-bottom: 1px;
    line-height: 36px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 1px #ece5e5;
  }
  .left,.funtionName{
    float: left;
  }
  .right{
    float: right;
  }
</style>
