<template>
  <div>
    <div class="evaluate" v-if="!this.shopEvaluate.message">
      <div v-for="(item, index) in shopEvaluate" :key="index">
        <div class="evaluate-top clearfix">
        <span class="evaluate-top-left">
          <span class="portrait">
            <img src="#"/>
          </span>
          <span class="name">{{item.evaluate[index].name}}</span>
          <span class="stars">
            <span class="iconfont icon-star clickStar" v-for="(stars, starsIndex) in item.evaluate[index].stars" :key="starsIndex"></span>
            <span class="iconfont icon-star unclickedStar" v-for="(unStars, unStarsIndex) in (5 - item.evaluate[index].stars)" :key="unStarsIndex + 'un'"></span>
          </span>
        </span>
        <span class="evaluate-top-right">{{item.evaluate[index].time}}</span>
        </div>
        <div class="evaluate-bottom">{{item.evaluate[index].evaluate}}</div>
      </div>
    </div>
    <div class="noEvaluate">
      {{shopEvaluate.message}}
    </div>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  name: 'Evaluate',
  data () {
    return {
      shopEvaluate: []
    }
  },
  props: ['goodsId'],
  created () {
    this.getEvaluate()
  },
  methods: {
    async getEvaluate () {
      this.shopEvaluate = await api.getEvaluate({goodsId: this.goodsId})
    }
  }
}
</script>

<style scoped>
.evaluate{
  padding: 50px 8px;
}
.evaluate-top{
  line-height: 30px;
}
.evaluate-top-right{
  float: right;
}
evaluate-top-left{
  float: left;
}
.evaluate-top-left>span{
  float: left;
  margin-right: 6px;
}
.icon-star{
  font-size: 14px;
}
.stars>span{
 float: left;
}
.unclickedStar{
  color: #cec8c8;
}
.clickStar{
  color: #d8ec1f;
}
.noEvaluate{
  text-align: center;
  padding: 60px 0;
}
</style>
