<template>
  <div>
    <Title message="商品列表">
      <div @click="goBack" slot="left">&lt; 返回</div>
    </Title>
    <div class="wrap">
      <div class="search clearfix" :class="{addBorder: findFocus}">
        <input type="text" placeholder="商品名称" v-model="goodsName" @focus="findFocus = true" @blur="findFocus = false">
        <span class="iconfont icon-chazhao findGoods" @click="getFindGoods"></span>
      </div>
      <div class="sort clearfix">
        <span class="sort-title">排序</span>
        <div v-for="(item, index) in sortList" :key="index">
          <div class="sort-itme" :class="{border: isFocus == item.message}" @click="focus(item.message),sort(item.message)">
            <span>{{item.name}}</span>
            <span class="up-down" :class="{display: isFocus == item.message}">
              <div class="iconfont icon-shang1" :class="{color: upDown}"></div>
              <div class="iconfont icon-tubiaozhizuo-" :class="{color: !upDown}"></div>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="body" v-if="find">
        <div v-for="(item, index) in goodsList" :key="index" class="sellWell-list">
          <router-link :to="{ name: 'Goods', params: item, query:{id: item._id, type: item.type, imageSrc: 'http://localhost:3000/static/img/petMallImg/'  + item.type + '/'}}">
            <img :src="'http://localhost:3000/static/img/petMallImg/' + item.type + '/' + item.image.show[0]"/>
            <div class="sellWell-list-info">
              <div class="name">{{item.name}}</div>
              <div class="specs">规格：{{item.specs}}</div>
              <div class="goodsPrice">￥{{item.price}}</div>
            </div>
          </router-link>
          <div class="shopCartwrap">
            <div class="iconfont icon-gouwu shopCart"></div>
          </div>
        </div>
      </div>
      <Loading v-else-if="loading"/>
      <NoFound v-else/>
    </div>
  </div>
</template>

<script>
import Title from '../../components/Header/Title'
import GoodCard from '../../components/GoodCard/GoodCard'
import eventBus from '../../eventBus/eventBus'
import NoFound from '../../components/Function/NoFound'
import Loading from '../../components/Function/Loading'

export default {
  name: 'GoodsList',
  components: {
    Title,
    GoodCard,
    Loading,
    NoFound
  },
  data () {
    return {
      findFocus: false,
      isFocus: 'name',
      upDown: true,
      find: false,
      loading: true,
      goodsName: '',
      goodsList: '',
      goodsPage: 0,
      sortList: [
        {
          name: '默认',
          message: 'name'
        },
        {
          name: '价格',
          message: 'price'
        },
        {
          name: '销量',
          message: 'volume'
        }
      ]
    }
  },
  computed: {
    goodsItem: function () {
      let catFood = this.$store.state.goods.catFood
      let cat = this.$store.state.goods.cat
      if (catFood) {
        return catFood.concat(cat)
      }
    },
    findGoods: function () {
      return this.$store.state.findGoods.goodsList
    },
    params: function () {
      return this.$route.params.goodsName
    }
  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.back() : this.$router.push('/')
    },
    focus (data) {
      if (this.isFocus !== data) {
        this.isFocus = data
        this.upDown = true
        return
      }
      this.upDown = !this.upDown
    },
    sort (data) {
      this.objectArraySort(this.goodsItem, data, this.upDown)
    },
    getFindGoods () {
      if (!this.goodsName) {
        return
      }
      this.find = false
      this.loading = true
      this.goodsList = ''
      this.$store.dispatch('findGoods', {condition: this.goodsName, config: {number: 20, page: this.goodsPage}})
    },
    // 对象数组排序
    objectArraySort: function (arr, keyName, isUp) {
      let valueA = ''
      let valueB = ''
      return arr.sort(function (objA, objB) {
        if (isUp) {
          valueA = objA[keyName]
          valueB = objB[keyName]
        } else {
          valueB = objA[keyName]
          valueA = objB[keyName]
        }
        if (valueA < valueB) return -1
        else if (valueA > valueB) return 1
        else return 0
      })
    }
  },
  created () {
    // 主页导航栏获取对应商品
    if (this.params) {
      this.goodsName = this.params
      this.getFindGoods()
    }
    // 主页获取商品名查询对应商品
    let the = this
    eventBus.$on('send', function (getValue) {
      if (getValue && !the.params) {
        the.goodsName = getValue
        the.getFindGoods()
      }
    })
    // 获取默认商品列表
    this.$store.dispatch('getGoods')
  },
  watch: {
    goodsItem: function () {
      if (this.goodsName) {
        return
      }
      this.goodsList = this.goodsItem
      if (this.goodsItem.length > 0) {
        this.find = true
      }
    },
    findGoods: function () {
      this.goodsList = this.findGoods
      if (this.findGoods.length > 0) {
        this.find = true
      } else {
        this.loading = false
      }
    }
  },
  beforeDestroy () {
    eventBus.$off('send')
  }
}
</script>

<style scoped>
.clearfix::after {
  display: block;
  overflow: hidden;
  content: "";
  clear: both;
}
.wrap{
  padding: 0 10px;
  overflow: hidden;
}
.search {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #eee6e6;
  margin: 8px auto;
  padding: 6px 20px;
}
.search input {
  float: left;
  width: 80%;
  border: none;
  font-size: 14px;
  line-height: 24px;
  color: #838181;
}
.search span {
  float: right;
}
.sort {
  background: #fff;
}
.sort-title{
  float: left;
  margin: 2px 20px 0 0;
}
.sort-itme{
  position: relative;
  width: 18%;
  float: left;
  box-sizing: border-box;
  margin-right: 6px;
  padding: 2px 8px 6px 0;
  text-align: center;
}
.up-down{
  position: absolute;
  right: 0px;
  top: -6px;
  display: none;
}
.iconfont{
  font-size: 20px;
}
.icon-tubiaozhizuo-{
  margin-top: -12px;
}
.border{
  border-bottom: 1px solid #ee8f8f;
}
.display{
  display: block;
}
.color{
  color: red;
}
.body{
  padding: 0 2px 50px 6px;
  overflow: hidden;
}
.sellWell-list{
  width: 49%;
  position: relative;
  padding: 8px 0;
  box-shadow: #e6e4e4 0 0 8px 1px;
  border-radius: 2px;
  margin-top: 6px;
  margin-right: 3px;
  float: left;
}
.sellWell-list:active{
  background: #fafaec;
}
.sellWell-list-info,.sellWell-list img{
  display: block;
  width: 90%;
  border-radius: 3px;
  margin: 10px auto;
}
.name,.specs,.goodsPrice{
  margin-top: 2px;
  white-space: nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.name,.specs{
  font-size: 14px;
}
.specs{
  color: #999;
}
.goodsPrice{
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
.addBorder{
  border: 1px solid #f8b6b6;
}
.findGoods:active{
  transition: all 0.1s;
  font-size: 22px;
}
</style>
