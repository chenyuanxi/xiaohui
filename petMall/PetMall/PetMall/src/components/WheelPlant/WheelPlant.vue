<template>
  <div>
    <div class="swiper-container" :style= "data.wheelStyle">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in data.image" :key="index">
            <img :src="data.imgSrc + item" alt="展示图片">
          </div>
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
  name: 'WheelPlant',
  props: ['data'],
  watch: {
    data: function () {
      console.log(1)
      /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "mySwiper" }] */
      setTimeout(() => {
        var mySwiper = new Swiper('.swiper-container', this.data.config)
      }, 10)
    }
  }
}
</script>

<style>
  .swiper-container{
    height: 160px;
    background: #fff;
  }
  .swiper-slide{
    text-align: center;
  }
  .swiper-pagination-bullet-active{
    background: #eb890a;
  }
  img{
    height: 100%;
    width: 100%;
  }
</style>
