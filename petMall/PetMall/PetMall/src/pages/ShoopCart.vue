<template>
  <div>
    <Title message="购物车">
      <div slot="left">></div>
    </Title>
    <div class="shoopCart">
      ShoopCart
    </div>
    <div class="wrapper" ref="wrapper">
        <ul class="content">
          <li>1...</li>
          <li>.2..</li>
          <li>..3.</li>
          <li>...4</li>
        </ul>
    </div>
  </div>
</template>

<script>
import Title from '../components/Header/Title'
import BScroll from 'better-scroll'
export default {
  name: 'ShoopCart',
  components: {
    Title
  },
  data () {
    return {
      data: [],
      scroll: '',
      sorollY:0,
    }
  },
  created () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper,{
              probeType: 3 //可以派发scroll事件
          })
      this.scroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
          console.log(this.scrollY)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
