<template>
  <div>
    <Title message="商品详情" v-if="!downTitle">
      <div @click="goBack" slot="left">&lt; 返回</div>
    </Title>
    <transition name="list">
      <RollTitle message="商品详情" v-if="downTitle">
        <div @click="goBack" slot="left">&lt; 返回</div>
      </RollTitle>
    </transition>
    <WheelPlant :data="wheelPlantData"></WheelPlant>
    <article v-if="goodsDetails._id" class="bag">
      <section class="info clearfix">
        <div class="left">
          <h1>{{goodsDetails.name}}</h1>
          <p><span>规格：{{goodsDetails.specs}}</span><span>单位：{{goodsDetails.unit}}</span></p>
          <p class="price">￥{{goodsDetails.price}}</p>
        </div>
        <div class="right" @click="collection">
          <div class="iconfont icon-shoucang" :class="{shoucang: isCollection}"></div>
          <span>收藏</span>
        </div>
      </section>
      <section class="details">
        <div class="details-title">
          <span>商品详情</span>
          <span>商品评价</span>
          <img src="./img/mmexport1560235013790.png">
        </div>
        <ul class="details-item" ref="details">
          <li v-for="(item, index) in goodsDetails.image.details" :key="index">
              <img :src="imageSrc + item"/>
          </li>
        </ul>
        <div class="bottomImg">
          <img src="./img/mmexport1560235144909.jpeg"/>
          <img src="./img/mmexport1560235147214.jpeg"/>
          <img src="./img/mmexport1560235149779.jpeg"/>
          <img src="./img/mmexport1560235153104.jpeg"/>
        </div>
      </section>
    </article>
    <footer class="footer">
      <div class="service">
        <div class="iconfont icon-weibiaoti-"></div>
        <span>客服</span>
      </div>
      <div class="shoopCart">
        <div class="iconfont icon-gouwu"></div>
        <span>购物车</span>
      </div>
      <div class="addShopCart">
        <p>加入购物车</p>
      </div>
      <div class="buy">
        <p>立即购买</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Title from '../../components/Header/Title'
import RollTitle from '../../components/Header/RollTitle'
import WheelPlant from '../../components/WheelPlant/WheelPlant'

export default {
  name: 'Goods',
  components: {
    Title,
    RollTitle,
    WheelPlant
  },
  data: function () {
    return {
      wheelPlantData: '',
      isCollection: false,
      downTitle: false,
      scroll: '',
      scrollY: ''
    }
  },
  computed: {
    goodsDetails: function () {
      return this.$store.state.goodsDetails
    },
    imageSrc: function () {
      return this.$route.query.imageSrc
    }
  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.back() : this.$router.push('/')
    },
    collection () {
      this.isCollection = !this.isCollection
    }
  },
  created () {
    // 保存参数数据
    this.$store.dispatch('setGoodsDetails', this.$route.params)
    // 刷新后根据ID重新获取数据
    if (!this.goodsDetails._id) {
      this.$store.dispatch('getGoodsDetails', this.$route.query)
      if (!this.$route.query.id) {
        this.$router.replace('/')
      }
    }
  },
  mounted () {
    // 滚动事件
    let ticking = false
    let obj = this
    this.scroll = function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          obj.scrollY = window.scrollY
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', this.scroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll)
  },
  watch: {
    goodsDetails: function (newQuestion, oldQuestion) {
      if (!this.goodsDetails._id) {
        return
      }
      this.wheelPlantData = {
        image: this.goodsDetails.image.show,
        imgSrc: this.imageSrc,
        wheelStyle: 'height: 300px',
        config: {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          speed: 800,
          // 自动轮播
          autoplay: {
            delay: 4000,
            disableOnInteraction: false
          }
          // 分页器
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true
          // }
        }
      }
    },
    scrollY () {
      this.downTitle = this.scrollY !== 0 || false
    }
  }
}
</script>

<style scoped>
  .list-enter-active{
    transition: all 0.5s;
  }
  .list-enter{
    opacity: 0;
    transform: translateY(16px);
  }
  .clearfix::after{
    display: block;
    overflow: hidden;
    content: "";
    clear: both;
  }
  .title{
    position: fixed;
    top: 0;
  }
  .bag{
    background: #f3f3f3;
    margin: 3px 0 50px 0;
  }
  .info,.details{
    background: #fff;
  }
  .info{
    margin: 6px 0;
    padding: 10px 6px;
    font-size: 14px;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
    padding: 8px;
    color:#999;
    text-align: center;
  }
  .shoucang{
    color: #ffd900;
  }
  .info .left h1{
    font-size: 14px;
    font-weight: 200;
  }
  .info .left p span{
    color: #999;
    margin-right: 6px;
  }
  .info .price{
    margin-top: 8px;
    font-size: 20px;
    color: red;
  }
  .details-title span{
    float: left;
    width: 50%;
    text-align: center;
    margin: 10px 0;
  }
  .details-item{
    margin: 0;
    padding: 0;
  }
  .details-item li{
    margin-top: -4px;
    padding: 0;
  }
  .details img{
    width: 100%;
  }
  .bottomImg img{
    margin-top: -4px;
  }
  .footer{
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 50px;
    text-align: center;
    background: #fff;
  }
  .footer>div{
    float: left;
  }
  .service,.shoopCart{
    flex: 3;
    height: 100%;
    padding-top: 8px;
    border-right: 0.5px solid #e9e6e6;
    font-size: 14px;
  }
  .addShopCart,.buy{
    flex: 6;
    line-height: 50px;
    color: #fff;
  }
  .addShopCart{
    background: #444343af;
  }
  .buy{
    background: #f3ae8d;
  }
</style>
