<template>
  <div>
    <Title message="购物车">
      <div slot="left">></div>
    </Title>
    <div class="shoopCart" v-if="have">
      <div class="goodsItem clearfix" v-for="(item, index) in userShopCart" :key="index">
        <div class="left clearfix">
          <input type="checkbox" :value="item" v-model="checkbox"/>
          <img :src="item.imgSrc" class="goodsItemImg"/>
        </div>
        <div class="middle">
          <p class="title">{{item.title}}</p>
          <p class="specs">{{item.specs}}</p>
          <div class="count">
              <span class="reduce" @click="reduce(index)">-</span>
              <input type="text" class="value" v-model="item.count" @blur="count"/>
              <span class="add" @click="add(index)">+</span>
          </div>
        </div>
        <div class="right">
          <p class="price">￥{{item.price}}</p>
          <p class="delete" @click="del(index, item.goodsId)">
            <span class="iconfont icon-shanchu pic"></span>
          </p>
          <span class="icon"></span>
        </div>
      </div>
    </div>
    <div v-else class="empty-wrap">
      <div class="empty"></div>
      <router-link to="/" class="toAdd">去添加</router-link>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <input type="checkbox" id="checkbox" v-model="checked" @click="allElection">
        <label for="checkbox">全选</label>
        <div class="totalPrice">
          <p>总计价格</p>
          <p>￥{{totalPrice}}</p>
        </div>
      </div>
      <div class="bottom-right" @click="buy">去结算({{total}})</div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Header/Title'
export default {
  name: 'ShoopCart',
  components: {
    Title
  },
  computed: {
    userShopCart: function () {
      return this.$store.state.getShopCart.goodsItem
    }
  },
  data () {
    return {
      totalPrice: 0,
      total: 0,
      checked: null,
      cartCount: -1,
      checkbox: [],
      have: true
    }
  },
  methods: {
    add (index) {
      this.userShopCart[index].count++
      this.count()
    },
    reduce (index) {
      this.userShopCart[index].count--
      this.count()
    },
    del (index, id) {
      this.userShopCart.splice(index, 1)
      this.filter(this.checkbox, id)
      this.count()
    },
    count () {
      let sum = 0
      this.userShopCart.forEach(function (value) {
        sum += parseInt(value.count)
      })
      this.cartCount = sum
    },
    allElection () {
      if (!this.checked) {
        let arr = []
        this.userShopCart.forEach((item) => {
          arr.push(item)
        })
        this.checkbox = arr
      } else {
        this.checkbox = []
      }
    },
    filter (arr, contrast) {
      this.checkbox = arr.filter((value, index, array) => {
        return value.goodsId !== contrast
      })
    },
    buy () {
      this.$store.dispatch('updateCart', {goodsItem: this.userShopCart})
      this.$router.go(0)
    }
  },
  watch: {
    cartCount: function () {
      this.$store.dispatch('setShopCartCount', this.cartCount)
    },
    checkbox: function () {
      // console.log(this.checkbox)
      // 统计总价和数量
      let sum = 0
      let price = 0
      this.checkbox.forEach((item) => {
        sum += item.count
        price += (item.price * item.count)
      })
      this.totalPrice = price
      this.total = sum
      // 控制全选按钮
      if (this.checkbox.length === 0) {
        this.checked = false
      } else if (this.userShopCart.length === this.checkbox.length) {
        this.checked = true
      } else {
        this.checked = false
      }
    },
    userShopCart: function () {
      // 购物车不为空
      if (this.userShopCart.length > 0) {
        this.have = true
      } else {
        this.have = false
      }
    }
  },
  created () {
    this.$store.dispatch('getShopCart')
  },
  beforeDestroy () {
    this.$store.dispatch('updateCart', {goodsItem: this.userShopCart})
  }
}
</script>

<style scoped>
.goodsItem{
  margin-top: 16px;
}
.left{
  margin-right: 16px;
}
.left,.middle{
  float: left;
  overflow: hidden;
}
.left{
  margin-top: 12px;
}
.right{
  float: right;
  margin: 12px 8px 0 0
}
.left input,.goodsItemImg{
  float: left;
}
.left input{
  height: 16px;
  margin: 22px 8px 0 10px;
}
.goodsItemImg{
  width: 60px;
  height: 60px;
}
.middle{
  width: 48%;
}
.middle > p{
  margin-top: 8px;
}
.specs{
  font-size: 14px;
  color: #999;
}
.title{
  white-space: nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.count{
  margin-top: 8px;
  text-align: left;
}
.add,.reduce{
  display: inline-block;
  width: 26px;
  height: 20px;
  background: #cfcbcb52;
  text-align: center;
}
.value{
  display: inline-block;
  width: 30px;
  border: 1px solid #cecaca;
  text-align: center
}
.price{
  font-size: 20px;
  color: #fc1d1dc2;
}
.delete{
  margin-top: 16px;
  text-align: center;
}
.pic{
  font-size: 20px;
}
.bottom{
  position: fixed;
  bottom: 40px;
  height: 60px;
  width: 100%;
  line-height: 60px;
  background: #f1f3ed;
}
.bottom-left{
  float: left;
  margin-left: 8px;
}
.bottom-right{
  float: right;
  padding: 0 26px;
  background: #00ffff;
}
.totalPrice{
  float: right;
  margin: 8px 0 0 12px;
  line-height: 23px;
  color: #eb660e;
}
.empty-wrap{
  position: fixed;
  top: 20%;
  bottom: 20%;
  width: 100%;
  text-align: center;
}
.empty{
  height: 200px;
  width: 200px;
  margin: 8px auto;
  background: url('../assets/images/empty.jpg') no-repeat center center;
  background-size: cover;
}
.toAdd{
  padding: 6px 36px;
  color: #fff;
  background: #b231eeaf;
  border-radius: 8px;
  margin: 0 auto;
}
</style>
