<template>
    <div class="homePage">
      <Header/>
      <HomePageWheel/>
      <Nav/>
      <FullReduction/>
      <SellWell/>
    </div>
</template>

<script>
import Header from '../components/Header/Header'
import HomePageWheel from '../components/WheelPlant/HomePageWheel'
import Nav from '../components/HomePagePart/Nav/Nav'
import FullReduction from '../components/HomePagePart/FullReduction/FullReduction'
import SellWell from '../components/HomePagePart/SellWell/SellWell'
export default {
  name: 'HomePage',
  components: {
    Header,
    Nav,
    FullReduction,
    SellWell,
    HomePageWheel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .homePage{
    background-color: #faeeee;
    padding-bottom: 34px;
  }
</style>
