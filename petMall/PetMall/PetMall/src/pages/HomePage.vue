<template>
    <div class="homePage">
      <Header/>
      <WheelPlant :data="wheelPlantData"/>
      <Nav/>
      <FullReduction/>
      <SellWell/>
    </div>
</template>

<script>
import Header from '../components/Header/Header'
import WheelPlant from '../components/WheelPlant/WheelPlant'
import Nav from '../components/HomePagePart/Nav/Nav'
import FullReduction from '../components/HomePagePart/FullReduction/FullReduction'
import SellWell from '../components/HomePagePart/SellWell/SellWell'

export default {
  name: 'HomePage',
  components: {
    Header,
    WheelPlant,
    Nav,
    FullReduction,
    SellWell
  },
  computed: {
    wheelPlantImg: function () {
      return this.$store.state.publicInfo.wheelPlantImg
    }
  },
  data () {
    return {
      wheelPlantData: ''
    }
  },
  watch: {
    wheelPlantImg: function (newQuestion, oldQuestion) {
      if (!this.wheelPlantImg[0]) {
        return
      }
      this.wheelPlantData = {
        image: this.wheelPlantImg,
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
    }
  },
  created () {
    this.$store.dispatch('getPublicInfo')
    this.$store.dispatch('getGoods')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .homePage{
    background-color: #f3dfdf96;
    padding-bottom: 34px;
  }
</style>
