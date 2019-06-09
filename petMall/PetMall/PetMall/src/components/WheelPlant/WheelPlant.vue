<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide wheel1"></div>
          <div class="swiper-slide wheel2"></div>
          <div class="swiper-slide wheel3"></div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
export default {
  mounted () {
    /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "mySwiper" }] */
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      speed: 800,
      // 自动轮播
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      // 分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  },
  name: 'WheelPlant'
}
</script>

<style>
  .swiper-container{
    height: 160px;
  }
  .swiper-pagination-bullet-active{
    background: #eb890a;
  }
  .wheel1{
    background: url(./img/1.jpg) no-repeat center center;
  }
  .wheel2{
    background: url(./img/2.jpg) no-repeat center center;
  }
  .wheel3{
    background: url(./img/3.jpg) no-repeat center center;
  }
  .wheel1,.wheel2,.wheel3{
    background-size: cover;
  }
</style>
