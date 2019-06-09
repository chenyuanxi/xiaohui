<template>
  <div class="homePage">
    <Header/>
    <WheelPlant/>
    <Nav/>
    <FullReduction/>
  </div>
</template>

<script>
import Header from '../components/Header/Header'
import WheelPlant from '../components/WheelPlant/WheelPlant'
import Nav from '../components/HomePagePart/Nav/Nav'
import FullReduction from '../components/HomePagePart/FullReduction/FullReduction'
export default {
  name: 'HomePage',
  components: {
    Header,
    WheelPlant,
    Nav,
    FullReduction
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .homePage{
    background-color: #f3eded96;
    padding-bottom: 40px;
  }
</style>
