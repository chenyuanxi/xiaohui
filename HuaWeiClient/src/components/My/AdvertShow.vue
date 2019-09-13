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
          imgName: 'https://res.vmallres.com/pimages//pages/adsImages/bASikhFwqN8XlOtqV9b1.png'
        },
        {
          imgName: 'https://res.vmallres.com/pimages//pages/adsImages/jPZPuOMGUNql5ZbFmzcp.jpg'
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
      }, 8000)
    }
  }
}
</script>

<style scoped>
.slide-banner{
  background: #fff;
  border-radius: 0.8rem;
  overflow: hidden;
}
.banner-wrapper{
  position: relative;
}
.slide-banner-scroll{
  min-height: 1px;
  overflow: hidden;
}
.slide-banner-wrapper{
  height: 100px;
  white-space: nowrap;
  font-size: 0;
}
.slide-item{
  display: inline-block;
  height: 100px;
  width: 100%;
  line-height: 100px;
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
  right: 1rem;
}
.doc{
  display: inline-block;
  margin: 0 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #fff;
}
.active{
  background: rgb(243, 240, 240);
}
</style>
