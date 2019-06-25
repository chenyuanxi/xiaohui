<template>
  <div>
    <ul class="nav">
      <li v-for="(item, index) in list" :key="index">
        <router-link :to="{name: 'GoodsList', params: {goodsName: item.message}}">
          <img :src="item.src"/>
          <span>{{item.message}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data: function () {
    return {
      list: [
        {
          src: require('./img/1.jpg'),
          message: '喵星人'
        },
        {
          src: require('./img/2.jpg'),
          message: '汪星球'
        },
        {
          src: require('./img/3.jpg'),
          message: '鱼摆摆'
        },
        {
          src: require('./img/4.jpg'),
          message: '萌小宠'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .nav{
    display: flex;
    margin: 6px 0;
    padding: 0;
    text-align: center;
    background: #fff;
  }
  .nav li{
    flex: 1;
  }
  .nav li span{
    display: block;
    margin: 6px 0;
    font-size: 14px;
  }
  .nav li img{
    width: 40px;
    height: 40px;
    margin: 6px auto;
    display: block;
    border-radius: 6px;
  }
</style>
