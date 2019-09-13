<template>
  <div class="wrap">
    <div class="horizontal-container">
      <h2>华为生活</h2>
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
          <div class="scroll-item" v-for="(item, index) in list" :key="index">
            <img :src="item.imgSrc"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
export default {
  data () {
    return {
      list: [
        {
          imgSrc: 'https://res.vmallres.com/pimages//sale/2019-01/vbWjbV8qDpMZAEfVG6Rr.png'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages//sale/2019-01/SsPo08I0eVbYcxkbU6tP.png'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages//sale/2019-01/SsPo08I0eVbYcxkbU6tP.png'
        }
      ]
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.bs.destroy()
  },
  methods: {
    init () {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        probeType: 2
      })
    }
  }
}
</script>
<style scoped>
.wrap{
  width: 96%;
  margin: 8px auto;
  padding: 8px;
  box-shadow: 0 0 6px 1px rgb(238, 234, 234);
  border-radius: 10px;
  background: #fff;
}
h2{
  font-size: 1rem;
  font-weight: 100;
  text-align: left;
  margin-bottom: 0.9rem;
}
.scroll-wrapper{
  white-space: nowrap;
  overflow: hidden;
}
.scroll-content{
  display: inline-block;
}
.scroll-item{
  vertical-align: top;
  display: inline-block;
  margin: 0 3px;
  font-size: 0.9rem;
  text-align: center;
}
img{
  width: 150px;
}
</style>
