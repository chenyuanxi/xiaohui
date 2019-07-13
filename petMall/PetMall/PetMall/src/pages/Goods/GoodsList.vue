<template>
  <div class="container">
    <Title message="商品列表">
      <div @click="goBack" slot="left">&lt; 返回</div>
    </Title>
    <div class="wrap">
      <div class="search clearfix" :class="{addBorder: findFocus}">
        <input
          type="text"
          placeholder="商品名称"
          v-model="goodsName"
          @focus="findFocus = true"
          @blur="findFocus = false"
        >
        <span class="iconfont icon-chazhao findGoods" @click="searchGoods"></span>
      </div>
      <div class="sort clearfix">
        <span class="sort-title">排序</span>
        <div v-for="(item, index) in sortList" :key="index">
          <div
            class="sort-itme"
            :class="{border: isFocus == item.message}"
            @click="focus(item.message),sort(item.message)"
          >
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
        <div class="scroll-wrapper" ref="scroll">
          <div class="scroll-content clearfix">
            <div v-for="(item, index) in goodsList" :key="index" class="sellWell-list">
              <router-link
                :to="{ name: 'Goods', params: item, query:{id: item._id, type: item.type, imageSrc: 'http://localhost:3000/static/img/petMallImg/'  + item.type + '/'}}"
              >
                <img
                  :src="imgUrl + item.type + '/' + item.image.show[0]"
                >
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
            <div v-if="loadingMore" class="loadingMore">
              <span>{{downRrfMessage}}</span>
            </div>
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
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import cookie from '../../cookie/index'
import api from '../../api/index'

BScroll.use(Pullup)

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
      loadingMore: false,
      goodsName: '',
      goodsList: [],
      goodsPage: 0,
      bs: null,
      cookieName: '',
      cookieValue: '',
      downRrfMessage: 'Loading more...',
      imgUrl: 'http://47.103.3.153:3000/static/img/petMallImg/',
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
    findGoods: function () {
      return this.$store.state.findGoods.goodsList
    },
    params: function () {
      return this.$route.params
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
      this.goodsList = this.objectArraySort(this.goodsList, data, this.upDown)
      this.bs.scrollTo(0, 0)
    },
    searchGoods () {
      this.getFindGoods({name: 'name', value: this.goodsName})
    },
    getFindGoods (condition) {
      if (!condition) {
        return
      }
      this.find = false
      this.loading = true
      this.$store.dispatch('findGoods', {condition: condition, config: {number: 20, page: this.goodsPage}})
    },
    async ref (condition) {
      let findGoods = await api.findGoods({condition: condition, config: {number: 20, page: this.goodsPage}})
      this.goodsList = findGoods.goodsList
      this.$nextTick(() => {
        this.init()
      })
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
    },
    init () {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollY: true,
        click: true,
        pullUpLoad: true,
        probeType: 2
      })
      this.bs.on('pullingUp', this.pullingUpHandler)
    },
    async pullingUpHandler () {
      this.loadingMore = true
      await this.refGoodsList()
      this.bs.finishPullUp()
      this.bs.refresh()
      this.loadingMore = false
    },
    async refGoodsList () {
      this.page++
      let findGoods = await api.findGoods({condition: {name: this.cookieName, value: this.cookieValue}, config: {number: 20, page: this.goodsPage}})
      if (findGoods.goodsList.length === 0) {
        this.downRrfMessage = '已经到底了~'
        return
      }
      this.goodsList = this.goodsList.concat(findGoods.goodsList)
    },
    initCookieInfo () {
      this.cookieName = cookie.getCookie('name')
      this.cookieValue = cookie.getCookie('value')
    }
  },
  created () {
    // 主页导航栏获取对应商品
    if (this.params.name) {
      this.getFindGoods({name: this.params.name, value: this.params.value})
      cookie.setCookie('name', this.params.name, 1)
      cookie.setCookie('value', this.params.value, 1)
    }
    // 主页获取商品名查询对应商品
    eventBus.$on('send', (getValue) => {
      if (getValue && !this.params.name) {
        console.log(getValue)
        this.goodsName = getValue
        this.getFindGoods({name: 'name', value: this.goodsName})
      }
    })
    // 刷新
    this.initCookieInfo()
    if (!this.params.name && !this.goodsName) {
      if (this.cookieName) {
        this.find = true
        this.ref({name: this.cookieName, value: this.cookieValue})
      } else {
        this.$router.push('/')
      }
    }
  },
  watch: {
    findGoods: function () {
      if (this.findGoods.length > 0) {
        this.find = true
        this.goodsList = this.findGoods
        this.$nextTick(() => {
          this.init()
        })
      } else {
        this.loading = false
      }
    },
    goodsName: function () {
      cookie.setCookie('name', 'name', 1)
      cookie.setCookie('value', this.goodsName, 1)
      this.initCookieInfo()
      this.downRrfMessage = 'Loading more...'
    }
  },
  beforeDestroy () {
    eventBus.$off('send')
    if (this.bs) {
      this.bs.destroy()
    }
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
.container{
  width: 100%;
  height: 667px;
  overflow: hidden;
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
.scroll-wrapper{
  overflow: hidden;
  height: 600px;
}
.scroll-content{
  padding-bottom: 100px;
}
.loadingMore{
  height: 28px;
  font-size: 20px;
  text-align: center
}
</style>
