<template>
  <div>
    <section>
      <div class="top">
        <h3 class="top-title">满减进行时</h3>
        <div class="top-more">更多 ></div>
      </div>
      <div class="body">
        <ul>
          <li class="goods-item" v-for="(item, index) in goodsItem" :key="index">
            <router-link :to="{ name: 'Goods', params: item, query:{id: item._id, type: item.type, imageSrc: 'http://localhost:3000/static/img/petMallImg/catFood/'}}" class="goods-img">
              <img :src="'http://localhost:3000/static/img/petMallImg/catFood/' + item.image.show[0]"/>
            </router-link>
            <div class="goods-info">
              <router-link :to="{ name: 'Goods', params: item, query:{id: item._id, type: item.type, imageSrc: 'http://localhost:3000/static/img/petMallImg/catFood/'}}" class="goods-title">{{item.name}}</router-link>
              <span class="specs">规格：{{item.specs}}</span>
              <div class="goods-bottom">
                <p><span class="symbol">￥</span>{{item.price}}<span class="price">{{item.discount}}</span></p>
                <button>立即抢购</button>
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
  computed: {
    goodsItem: function () {
      return this.$store.state.goods.catFood
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
    border-left: 3px solid #ff9100e1;
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
    border-bottom: 1px solid #f560607c;
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
    color:#ff0000dc;
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
    background: #ff00008a;
  }
</style>
