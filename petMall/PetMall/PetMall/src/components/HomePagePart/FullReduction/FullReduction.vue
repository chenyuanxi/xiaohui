<template>
  <div>
    <section>
      <div class="top">
        <h3 class="top-title">满减进行时</h3>
        <div class="top-more">更多 ></div>
      </div>
      <div class="body">
        <ul>
          <li class="goods-item" v-for="item in goodsItem" :key="item.id">
            <div class="goods-img">
              <img :src='item.img'/>
            </div>
            <div class="goods-info">
              <p class="goods-title">{{item.title}}<span>规格：{{item.specs}}</span></p>
              <div class="goods-bottom">
                <p><span class="symbol">￥</span>{{item.price}}<span class="price">满减</span></p>
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
  data () {
    return {
      goodsItem: [
        {
          id: 1,
          img: require('./img/1.jpg'),
          title: '皇家波斯幼猫粮/KP32',
          specs: '500g',
          price: 52.9
        },
        {
          id: 2,
          img: require('./img/2.jpg'),
          title: '皇家美国短毛猫/ASA31',
          specs: '1kg',
          price: 89
        },
        {
          id: 3,
          img: require('./img/3.jpg'),
          title: '缅因猫成猫粮/MC31',
          specs: '2kg',
          price: 199
        },
        {
          id: 4,
          img: require('./img/4.jpg'),
          title: '暹罗猫成粮/SM38',
          specs: '2kg',
          price: 366
        },
        {
          id: 5,
          img: require('./img/5.jpg'),
          title: '皇家布偶成猫粮/RA32',
          specs: '2kg',
          price: 386
        }
      ]
    }
  }
}
</script>

<style scoped>
  section{
    background: #fff;
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
    font-size: 16px;
  }
  .goods-title span{
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
