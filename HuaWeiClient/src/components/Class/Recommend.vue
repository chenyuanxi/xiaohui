<template>
  <div class="wrap" :style="wrapStyle">
    <div v-for="(item, index) in advertList" :key="index">
      <img class="topImg" :src="item.imgSrc"/>
    </div>
    <div class="core-container">
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
          <div class="scroll-item" v-for="(item, index) in navList" :key="index">
            <img class="topImg" :src="item.imgSrc"/>
          </div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <h2>热门推荐</h2>
      <div class="content">
        <div class="recommend-item" v-for="(item, index) in recommendList" :key="index">
          <img class="topImg" :src="item.imgSrc"/>
          <div class="name">{{item.name}}</div>
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
      wrapStyle: 'height: ' + (window.innerHeight - 86) + 'px;',
      advertList: [
        {
          imgSrc: 'https://res.vmallres.com/pimages/pages/mobile/frontCategory/jX2geBSctj0Jgdsij0Nb.jpg'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages/pages/mobile/frontCategory/2uCsx36CeRirxjea54Eg.jpg'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages/pages/mobile/frontCategory/DrO9ra6K8E3UwDrpJYMm.jpg'
        }
      ],
      navList: [
        {
          imgSrc: 'https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726202455.jpg'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726262819.jpg'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726291458.jpg'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726312709.jpg'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726341314.jpg'
        }
      ],
      recommendList: [
        {
          imgSrc: 'https://res.vmallres.com/pimages/product/6901443293483/428_428_1555465815334mp.png',
          name: 'HUAWEI P30 Pro'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png',
          name: '荣耀9X'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages/product/6901443293735/428_428_1555465064246mp.png',
          name: 'HUAWEI P30'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages/product/6901443304332/428_428_1558244819612mp.png',
          name: '荣耀20'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages/product/6901443316496/428_428_1563762865294mp.png',
          name: 'nova 5i Pro'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages/product/6901443293735/428_428_1555465064246mp.png',
          name: 'HUAWEI P30'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages/product/6901443304332/428_428_1558244819612mp.png',
          name: '荣耀20'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages/product/6901443316496/428_428_1563762865294mp.png',
          name: 'nova 5i Pro'
        }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.init()
    }, 100)
  },
  beforeDestroy () {
    this.bs.destroy()
  },
  methods: {
    init () {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        click: true,
        probeType: 2
      })
    }
  }
}
</script>

<style scoped>
h2{
  text-align: center;
  font-size: 1.2rem;
  margin-top: 1rem;
}
.wrap{
  overflow: scroll;
}
.topImg{
  display: block;
  width: 96%;
  margin: 3px auto 0 auto;
  border-radius: 6px;
}
.scroll-content{
  display: inline-block;
  white-space: nowrap;
}
.scroll-wrapper{
  width: 100%;
  overflow: hidden;
}
.scroll-item{
  display: inline-block;
  width: 100px;
}
.recommend .content{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
}
.recommend-item{
  width: 33%;
  padding: 8px;
}
.recommend-item .name{
  font-size: 0.8rem;
  margin-top: 6px;
}
</style>
