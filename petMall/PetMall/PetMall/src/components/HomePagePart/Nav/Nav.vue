<template>
  <div>
    <ul class="nav">
      <li>
        <img src="./img/1.jpg"/>
        <span>喵星人</span>
      </li>
      <li>
        <img src="./img/2.jpg"/>
        <span>汪星球</span>
      </li>
      <li>
        <img src="./img/3.jpg"/>
        <span>鱼摆摆</span>
      </li>
      <li>
        <img src="./img/4.jpg"/>
        <span>萌小宠</span>
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
  .nav{
    display: flex;
    margin: 10px 0;
    padding: 0;
    text-align: center;
    background-color: #fff;
  }
  .nav li{
    flex: 1;
  }
  .nav li>img{
    width: 40px;
    margin: 0 auto;
    display: block;
  }
</style>
