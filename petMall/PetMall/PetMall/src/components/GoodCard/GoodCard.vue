<template>
  <div>
    <div v-for="(item, index) in goodsItem" :key="index" class="sellWell-list">
      <router-link :to="{ name: 'Goods', params: item, query:{id: item._id, type: item.type, imageSrc: imgUrl}}">
        <img :src="imgUrl + item.image.show[0]"/>
        <div class="sellWell-list-info">
          <div class="name">{{item.name}}</div>
          <div class="specs">规格：{{item.specs}}</div>
          <div class="price">￥{{item.price}}</div>
        </div>
      </router-link>
      <div class="shopCartwrap" @click="addToCart(item)">
        <div class="iconfont icon-gouwu shopCart"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullReduction',
  data () {
    return {
      imgUrl: 'http://47.103.3.153:3000/static/img/petMallImg/cat/'
    }
  },
  computed: {
    goodsItem: function () {
      return this.$store.state.goods.cat
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
  .sellWell-list{
    position: relative;
    padding: 8px 0;
    box-shadow: #e6e4e4 0 0 8px 1px;
  }
  .sellWell-list:active{
    background: #fafaec;
  }
  .sellWell-list-info,.sellWell-list,.sellWell-list img{
    display: block;
    width: 90%;
    border-radius: 3px;
    margin: 10px auto;
  }
  .name,.specs,.price{
    margin-top: 2px;
  }
  .name,.specs{
    font-size: 14px;
  }
  .specs{
    color: #999;
  }
  .price{
    font-size: 18px;
    color: red;
  }
  .shopCartwrap{
    position: absolute;
    right: 20px;
    bottom: 20px;
    padding: 5px 6px;
    background: #f59090;
    border-radius: 3px;
  }
  .shopCart{
    font-size: 20px;
    color: #fff;
  }
</style>
