<template>
  <div class="wrap">
    <div class="row">
      <div class="col mainLeft" :style="{backgroundImage: 'url(' + (mainLeft[0].imgSrc) + ')'}">
      </div>
      <div class="col mainRight">
        <div class="mainRightList" v-for="(item, index) in mainRight" :key="index"  :style="{backgroundImage: 'url(' + (item.imgSrc) + ')'}"></div>
      </div>
    </div>
    <div class="middle clearfix">
      <div class="middle-item" v-for="(item, index) in middleList" :key="index">
        <div class="middle-item-img" :style="{backgroundImage: 'url(' + (item.imgSrc) + ')'}"></div>
      </div>
    </div>
    <div class="row">
      <div class="col bottomList" v-for="(item, index) in bottomList" :key="index">
        <img :src="item.imgSrc"/>
        <ul>
          <li class="name">{{item.name}}</li>
          <li class="addInfo">{{item.addInfo}}</li>
          <li class="pirce">￥{{item.pirce}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      mainLeft: [
        {
          imgSrc: 'https://res.vmallres.com/pimages//pages/adsImages/s0bvKrKDRx6YkA4vromT.jpg'
        }
      ],
      mainRight: [
        {
          imgSrc: 'https://res.vmallres.com/pimages//pages/adsImages/Tkk7Qh8XFGJ9xyP7n0rk.jpg'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages//pages/adsImages/HHTntjkzCrVYuaoYT4vT.jpg'
        }
      ],
      middleList: [
        {
          imgSrc: 'https://res.vmallres.com/pimages//pages/adsImages/Oc5Yjc9tyrEeK8ytzCtP.jpg'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages//pages/adsImages/05kgLYTrWu9G5e8J81T3.jpg'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages//pages/adsImages/ZJPdW3Sd75Yizo6Z6o3Q.jpg'
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages//pages/adsImages/UvU827pNe6IMpLRD3Grv.jpg'
        }
      ],
      bottomList: [
        {
          imgSrc: 'https://res.vmallres.com/pimages//product/6901443317783/428_428_1561518789796mp.png',
          name: 'HUAWEI P30',
          addInfo: '赠精美保护壳',
          pirce: 3988
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages//product/6901443232413/428_428_1554948115791mp.png',
          name: '荣耀10青春版',
          addInfo: '最高降500',
          pirce: 999
        },
        {
          imgSrc: 'https://res.vmallres.com/pimages//product/6901443232413/428_428_1554948115791mp.png',
          name: 'HUAWEI Mate 20',
          addInfo: '享6期免息',
          pirce: 3199
        }
      ]
    }
  }
}
</script>
<style scoped>
.wrap{
  background: #fff;
}
.col{
  padding: 0;
}
.mainLeft,.mainRightList,.middle-item-img{
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.mainLeft{
  margin: 0 2px 0 13px;
  height: 260px;
}
.mainRight{
  margin: 0 13px 0 2px;
}
.mainRightList{
  height: 130px;
}
.middle-item{
  width: 50%;
  box-sizing: border-box;
  padding: 2px;
  height: 130px;
  float: left;
}
.middle-item-img{
  height: 100%;
  width: 100%;
}
.bottomList{
  margin: 2px;
  padding: 8px 1rem;
  text-align: center;
  background: #f9f9f9;
}
.name,.pirce{
  font-size: 14px;
}
.addInfo{
  color: #b6b2b2;
  font-size: 12px;
}
img{
  width: 80%;
  height: 50%;
}
</style>
