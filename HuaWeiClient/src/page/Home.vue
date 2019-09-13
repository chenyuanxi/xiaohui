<template>
  <div class="wrap">
    <header>
      <div class="top-search">
        <span class="iconfont icon-sousuo"></span>
        <UpDownScroll/>
      </div>
    </header>
    <Carousel/>
    <Nav/>
    <Advert/>
    <Recommend/>
  </div>
</template>
<script>
import UpDownScroll from '../components/Home/UpDownScroll'
import Carousel from '../components/Home/Carousel'
import Nav from '../components/Home/Nav'
import Advert from '../components/Home/Advert'
import Recommend from '../components/Home/Recommend'

export default {
  name: 'Home',
  components: {
    Carousel,
    UpDownScroll,
    Nav,
    Advert,
    Recommend
  }
}
</script>
<style scoped>
.wrap{
  width:100%;
  overflow: hidden;
  background: #f9f9f9;
}
header{
  background: #fff;
  padding: 5px 6px;
}
.top-search{
  position: relative;
  height: 1.6rem;
  background: #fff6f6;
}
.icon-sousuo{
  position: absolute;
  top: 50%;
  color: #999;
  transform: translate(50%,-50%);
  font-size: 0.8rem;
}
</style>
