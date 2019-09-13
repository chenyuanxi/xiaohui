<template>
  <div class="wrap">
    <div class="horizontal-container">
      <h2>精品推荐</h2>
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
          <div class="recommendList" v-for="(item, index) in recommendList" :key="index">
            <div>
              <div class="img">
                <img :src="item.imgSrc"/>
                <div class="addInfo">{{item.addInfo}}</div>
              </div>
              <ul>
                <li class="name">{{item.name}}</li>
                <li class="type">{{item.type}}</li>
                <li class="price">￥{{item.price}}<del v-if="item.oldPrice">￥{{item.oldPrice}}</del></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>
      <h2>精品推荐</h2>
      <div class="content">
        <div class="recommendListWrap">
          <div class="recommendList" v-for="(item, index) in recommendList" :key="index">
            <div class="img">
              <img :src="item.imgSrc"/>
              <div class="addInfo">{{item.addInfo}}</div>
            </div>
            <ul>
              <li class="name">{{item.name}}</li>
              <li class="type">{{item.type}}</li>
              <li class="price">￥{{item.price}}<del>￥{{item.oldPrice}}</del></li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
export default {
  data () {
    return {
      recommendList: [
        {
          name: 'HUAWEI WATCH GT',
          imgSrc: 'https://res.vmallres.com/pimages//product/6901443315307/428_428_1559035092483mp.png',
          type: '活力款',
          addInfo: '下单最高优惠100',
          price: 1488,
          oldPrice: null
        },
        {
          name: '荣耀Magic2',
          imgSrc: 'https://res.vmallres.com/pimages//product/6901443269723/428_428_1540895297253mp.png',
          type: null,
          addInfo: '最高优惠1700',
          price: 2499,
          oldPrice: 3799
        },
        {
          name: '华为平板 M6 10.8英寸',
          imgSrc: 'https://res.vmallres.com/pimages//product/6901443315826/428_428_1560758954741mp.png',
          type: null,
          addInfo: '新品上市',
          price: 2299,
          oldPrice: null
        },
        {
          name: '荣耀8X',
          imgSrc: 'https://res.vmallres.com/pimages//product/6901443261475/428_428_1550885529349mp.png',
          type: null,
          addInfo: null,
          price: 1199,
          oldPrice: 1399
        },
        {
          name: 'HUAWEI nova 4',
          imgSrc: 'https://res0.vmallres.com/pimages//product/6901443278138/428_428_1544693593610mp.png',
          type: null,
          addInfo: '享6期免息',
          price: 2466,
          oldPrice: null
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
  background: #fff;
  padding: 1.2rem 2px;
}
h2{
  text-align: center;
  font-size: 1.2rem;
}
.content{
  white-space: nowrap;
  overflow: hidden;
}
/* .recommendListWrap{
  display: inline-block;
  overflow: scroll;
}
.recommendListWrap::-webkit-scrollbar{
  display: none;
} */
.recommendList{
  vertical-align: top;
  display: inline-block;
  margin: 0 2px;
  font-size: 0.9rem;
  text-align: center;
}
.price{
  font-size: 0.9rem;
  color: #e23535;
}
.img{
  position: relative;
  margin: 6px 3px;
  padding: 1rem;
  padding-bottom: 1.3rem;
  border-radius: 10px;
  background: #f9f9f9;
}
img{
  width: 100px;
}
.addInfo{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 0.8rem;
  border-radius: 0 0 6px 6px;
  color: #a8a4a4;
  background: #f1efef;
}
del{
  margin: 2px;
  color: rgb(182, 176, 176);
}
.scroll-wrapper{
  white-space: nowrap;
  overflow: hidden;
}
.scroll-content{
  display: inline-block;
}
</style>
