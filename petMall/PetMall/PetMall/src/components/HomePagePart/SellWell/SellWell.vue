<template>
  <div>
    <section>
      <div class="top">
        <h3 class="top-title">热销推荐</h3>
        <router-link :to="{name: 'GoodsList', params: {value: '折扣', name: 'discount'}}" class="top-more">更多 ></router-link>
      </div>
      <div class="body">
        <GoodCard></GoodCard>
      </div>
    </section>
  </div>
</template>

<script>
import GoodCard from '../../GoodCard/GoodCard'
export default {
  name: 'FullReduction',
  components: {
    GoodCard
  },
  computed: {
    goodsItem: function () {
      return this.$store.state.goods.cat
    }
  }
}
</script>

<style scoped>
  section{
    background: #fff;
    margin-top: 8px;
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
    border-left: 3px solid #ff9100e1;
  }
  .top-more{
    float: right;
    padding-right: 10px;
    font-size: 14px;
    color: #999;
  }
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
