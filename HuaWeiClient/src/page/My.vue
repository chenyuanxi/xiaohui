<template>
  <div class="wrap">
    <Header/>
    <Order/>
    <Vmall/>
    <Life/>
  </div>
</template>
<script>
import Header from '../components/My/Header'
import Order from '../components/My/Order'
import Vmall from '../components/My/Vmall'
import Life from '../components/My/Life'

export default {
  components: {
    Header,
    Order,
    Vmall,
    Life
  }
}
</script>
<style scoped>
.wrap{
  background: #f8f8f8;
}
</style>
