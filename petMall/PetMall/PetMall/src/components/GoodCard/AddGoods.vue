<template>
  <div>
    <div class="addGoodsCart">
      <div class="container">
        <div class="top clearfix">
          <img :src="goodsInfo.imgSrc" class="goodsImg"/>
          <div class="info">
            <p class="title">{{goodsInfo.title}}</p>
            <p class="price">￥{{goodsInfo.price}}</p>
          </div>
        </div>
        <div class="bottom clearfix">
          <div class="left">
            <span>数量：</span>
            <div class="count">
              <span class="reduce" @click="reduce">-</span>
              <input type="text" class="value" v-model="count"/>
              <span class="add" @click="add">+</span>
            </div>
          </div>
          <div class="right">
            <button class="button" @click="addToCart">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddGoods',
  data: function () {
    return {
      count: 0
    }
  },
  props: ['goodsInfo'],
  methods: {
    add () {
      this.count++
    },
    reduce () {
      if (this.count > 0) {
        this.count--
      }
    },
    addToCart () {
      if (!this.goodsInfo.user.phone) {
        this.$router.push('/SignRegister')
      } else {
        let info = {
          phone: this.goodsInfo.user.phone,
          goodsItem: [
            {
              goodsId: this.goodsInfo.id,
              count: parseInt(this.count),
              imgSrc: this.goodsInfo.imgSrc,
              price: this.goodsInfo.price,
              title: this.goodsInfo.title,
              specs: this.goodsInfo.specs
            }
          ]
        }
        this.$store.dispatch('addToCart', {info: info})
        this.sendFather({switch: false})
      }
    },
    sendFather (data) {
      this.$emit('getChild', data)
    }
  }
}
</script>
<style scoped>
.addGoodsCart{
  position: fixed;
  top: 36px;
  bottom: 50px;
  width: 100%;
  z-index: 100;
  background: rgba(216, 214, 214, 0.42);
}
.container{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 160px;
  padding-top: 10px;
  background: #fff;
}
.goodsImg{
  float: left;
  margin-left: 6px;
  width: 80px;
  height: 80px;
}
.info{
  float: left;
  margin: 8px 0 0 8px;
}
.title{
  font-size: 14px;
}
.price{
  margin-top: 20px;
  font-size: 18px;
  color: red;
}
.bottom{
  margin: 40px 0 0 8px;
}
.bottom .left{
  float: left;
}
.bottom .right{
  float: right;
}
.count{
  display: inline-block;
  text-align: center;
  line-height: 20px;
}
.add,.reduce{
  display: inline-block;
  width: 26px;
  height: 20px;
  background: #ecebeb;
}
.value{
  display: inline-block;
  border: 1px solid #cecaca;
  width: 26px;
  text-align: center
}
.button{
  margin-right:16px;
  margin-top: -15px;
  background: #f3ae8d;
  border: none;
  color: #5c5a5a;
  width: 60px;
  height: 30px;
}
</style>
