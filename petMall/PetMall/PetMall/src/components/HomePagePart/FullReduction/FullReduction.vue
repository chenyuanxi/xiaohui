<template>
  <div>
    <section>
      <div class="top">
        <h3 class="top-title">满减进行时</h3>
        <router-link :to="{name: 'GoodsList', params: {value: '折扣', name: 'discount'}}" class="top-more">更多 ></router-link>
      </div>
      <div class="body">
        <ul>
          <li class="goods-item" v-for="(item, index) in goodsItem" :key="index">
            <router-link :to="{ name: 'Goods', params: item, query:{id: item._id, type: item.type, imageSrc: imgUrl}}" class="goods-img">
              <img :src="imgUrl + item.image.show[0]"/>
            </router-link>
            <div class="goods-info">
              <router-link :to="{ name: 'Goods', params: item, query:{id: item._id, type: item.type, imageSrc: imgUrl}}" class="goods-title">{{item.name}}</router-link>
              <span class="specs">规格：{{item.specs}}</span>
              <div class="goods-bottom">
                <p><span class="symbol">￥</span>{{item.price}}<span class="price">{{item.discount}}</span></p>
                <button @click="addToCart(item)">立即抢购</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FullReduction',
  data () {
    return {
      imgUrl: 'http://47.103.3.153:3000/static/img/petMallImg/catFood/'
    }
  },
  computed: {
    goodsItem: function () {
      return this.$store.state.goods.catFood
    },
    usrPhone: function () {
      return this.$store.state.getUserInfo.user.phone
    }
  },
  methods: {
    addToCart (item) {
      if (!this.usrPhone) {
        this.$router.push('/SignRegister')
        return
      }
      let info = {
        phone: this.usrPhone,
        goodsItem: [
          {
            goodsId: item._id,
            count: 1,
            imgSrc: this.imgUrl + item.image.show[0],
            price: item.price,
            title: item.name,
            specs: item.specs
          }
        ]
      }
      this.$store.dispatch('addToCart', {info: info})
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  section{
    background: #fff;
    margin-top:8px;
    padding-bottom: 2px;
  }
  .top{
    height: 36px;
    line-height: 36px;
    overflow: hidden;
  }
  .top-title{
    float: left;
    margin: 0;
    padding-left: 10px;
    font-size: 18px;
    font-weight: 200;
    border-left: 3px solid #fab65c;
  }
  .top-more{
    float: right;
    padding-right: 10px;
    font-size: 14px;
    color: #999;
  }
  .body{
    margin-top: 10px;
    padding-right: 10px;
  }
  .goods-item{
    overflow: hidden;
  }
  .goods-img,.goods-info{
    float: left;
    height: 120px;
  }
  .goods-img{
    position: relative;
    width: 35%;
  }
  .goods-img img{
    display: block;
    width:60px;
    height: 80px;
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .goods-info{
    width: 65%;
    box-sizing: border-box;
    padding-top: 8px;
    border-bottom: 1px solid #f8bfbf;
  }
  .goods-title{
    color: #000;
    font-size: 16px;
  }
  .goods-info .specs{
    display: block;
    margin-top: 3px;
    font-size: 12px;
    color: #999;
  }
  .goods-bottom{
    margin-top: 32px;
    color:#f74a4a;
  }
  .goods-bottom p{
    float: left;
  }
  .symbol{
    font-size: 12px;
  }
  .price{
    display: block;
    margin-top: 3px;
    font-size: 12px;
    text-align: center;
    background: #eceaea;
  }
  .goods-bottom button{
    float: right;
    margin-top: 6px;
    padding: 6px 10px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    color: #fff;
    background: #fa8b8b;
  }
</style>
