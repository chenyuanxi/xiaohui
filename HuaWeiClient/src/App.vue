<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import './assets/icon/iconfont.css'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
html{
  overflow-y: scroll;
}
#app{
  padding-bottom: 3rem;
}
ul{
  margin: 0;
  padding: 0;
}
li{
  list-style-type: none;
}
p{
  margin: 0;
  padding: 0;
}
</style>
