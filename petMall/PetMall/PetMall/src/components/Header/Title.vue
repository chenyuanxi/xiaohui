<template>
  <header>
    <div class="left"><slot name="left"></slot></div>
    <span>{{message}}</span>
    <div class="right"><slot name="right"></slot></div>
  </header>
</template>

<script>
export default {
  name: 'Title',
  props: ['message']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    height: 36px;
    padding: 0 10px;
    background: #eff2f3;
    line-height: 36px;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 1px 1px #d6cece;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
</style>
