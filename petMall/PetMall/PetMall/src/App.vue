<template>
  <div id="app">
    <router-view/>
    <FooterNav v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import './assets/iconfont/iconfont.css'
import 'normalize.css'
import FooterNav from './components/FooterNav/FooterNav'

export default {
  components: {
    FooterNav
  },
  name: 'App',
  created: function () {
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
[v-cloak] {
  display: none;
}
ul{
  list-style-type: none;
}
button,input{
  outline: none;
}
input::placeholder{
  color: #c9c6c6;
}
a{
  color: #000;
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
