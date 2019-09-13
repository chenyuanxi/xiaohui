<template>
  <div class="slide-banner">
    <div class="banner-wrapper">
      <div class="slide-banner-scroll" ref="slide">
        <div class="slide-banner-wrapper">
          <div v-for="(item, index) in carousel" :key="index" class="slide-item">
            <img :src="imgSrc+item.imgName"/>
          </div>
        </div>
      </div>
      <div class="docs-wrapper">
        <span
          class="doc"
          v-for="(item, index) in carousel.length"
          :key="index"
          :class="{active: currentPageIndex === index}"
          @click="toPage(index)"
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

BScroll.use(Slide)
export default {
  name: 'Carousel',
  data () {
    return {
      slide: null,
      currentPageIndex: 0,
      playTimer: 0,
      imgSrc: '',
      carousel: [
        {
          imgName: 'https://res.vmallres.com/pimages//pages/adsImages/xahgwosA8ygXbBBpB1DL.jpg'
        },
        {
          imgName: 'https://res.vmallres.com/pimages//pages/adsImages/4bEpZWthRuWsKVqk7bAI.jpg'
        },
        {
          imgName: 'https://res.vmallres.com/pimages//pages/adsImages/FJ8mlKzixeV0zfKTSyZU.jpg'
        },
        {
          imgName: 'https://res.vmallres.com/pimages//pages/adsImages/HXiLa08Yg7NwtSIBsC9z.jpg'
        },
        {
          imgName: 'https://res.vmallres.com/pimages//pages/adsImages/W7TC77q2pA6qQrPJ7QQN.jpg'
        }
      ]
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    clearTimeout(this.playTimer)
    this.slide.destroy()
  },
  methods: {
    init () {
      clearTimeout(this.playTimer)
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true,
        scrollY: false,
        slide: {
          loop: true,
          threshold: 100
        },
        useTransition: true,
        momentum: false,
        bounce: false,
        stopPropagation: true,
        probeType: 2
      })
      this.slide.on('scrollEnd', this._onScrollEnd)

      // user touches the slide area
      this.slide.on('beforeScrollStart', () => {
        clearTimeout(this.playTimer)
      })
      // user touched the slide done
      this.slide.on('scrollEnd', () => {
        this.autoGoNext()
      })
      this.slide.on('slideWillChange', (page) => {
        this.currentPageIndex = page.pageX
      })
      this.autoGoNext()
    },
    nextPage () {
      this.slide.next()
    },
    prePage () {
      this.slide.prev()
    },
    toPage (index) {
      this.slide.goToPage(index)
    },
    _onScrollEnd () {
      this.autoGoNext()
    },
    autoGoNext () {
      clearTimeout(this.playTimer)
      this.playTimer = setTimeout(() => {
        this.nextPage()
      }, 4000)
    }
  }
}
</script>

<style scoped>
.slide-banner{
  background: #fff;
}
.banner-wrapper{
  position: relative;
}
.slide-banner-scroll{
  min-height: 1px;
  overflow: hidden;
}
.slide-banner-wrapper{
  height: 200px;
  white-space: nowrap;
  font-size: 0;
}
.slide-item{
  display: inline-block;
  height: 200px;
  width: 100%;
  line-height: 200px;
  text-align: center;
  font-size: 26px;
}
img{
  width: 100%;
  height: 100%;
}
.docs-wrapper{
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
}
.doc{
  display: inline-block;
  margin: 0 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #eee;
}
.active{
  width: 20px;
  border-radius: 5px;
}
</style>
