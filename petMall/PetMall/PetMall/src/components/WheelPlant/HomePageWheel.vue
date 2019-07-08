<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in wheelPlantImg" :key="index">
            <img :src="imgSrc + item" alt="展示图片">
          </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
export default {
  name: 'WheelPlant',
  computed: {
    wheelPlantImg: function () {
      return this.$store.state.publicInfo.wheelPlantImg
    }
  },
  data: function () {
    return {
      imgSrc: 'http://localhost:3000/static/img/petMallImg/wheelPlant/',
      config: {
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
      }
    }
  },
  methods: {
    startWheel: function () {
      setTimeout(() => {
        /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "mySwiper" }] */
        let mySwiper = new Swiper('.swiper-container', this.config)
      }, 10)
    }
  },
  created () {
    if (this.wheelPlantImg[0]) {
      this.startWheel()
    }
  },
  watch: {
    wheelPlantImg: function () {
      this.startWheel()
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
