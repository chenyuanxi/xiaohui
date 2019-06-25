<template>
  <div class="wrap">
      <header>
          <div class="left"><slot name="left"></slot></div>
          <div class="message">{{message}}</div>
          <div class="right"><slot name="right"></slot></div>
      </header>
  </div>
</template>

<script>
export default {
  name: 'RollTitle',
  props: ['message']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
  header{
    position: relative;
    height: 36px;
    margin-bottom: 2px;
    background: #c6c9fa;
    line-height: 36px;
    overflow: hidden;
    box-shadow: 0 1px 1px #d6cece;
  }
  .left{
    position: absolute;
    left: 10px;
  }
  .right{
    position: absolute;
    right: 10px;
  }
  .message{
    position: absolute;
    right: 50%;
    transform: translate(50%);
  }
</style>
