<template>
  <header>
    <div class="logo">宠物乐园</div>
    <div class="search">
      <input type="text" class="text" placeholder="搜索商品" v-model="goodsName">
      <span class="iconfont icon-chazhao" @click="findGoods"></span>
    </div>
  </header>
</template>

<script>
import eventBus from '../../eventBus/eventBus'
export default {
  name: 'Header',
  data: function () {
    return {
      show: false,
      goodsName: ''
    }
  },
  methods: {
    findGoods: function () {
      if (this.goodsName.trim()) {
        this.$router.push('/goodsList')
      }
    }
  },
  beforeDestroy () {
    if (this.goodsName) {
      eventBus.$emit('send', this.goodsName.trim())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  height: 36px;
  background: #fff;
  line-height: 36px;
  overflow: hidden;
}
.logo{
  float:left;
  margin-left: 10px;
}
.search{
  float: right;
  position: relative;
  padding:0 10px;
  margin-right: 10px;
}
.text{
  width: 100px;
  height: 22px;
  font-size: 14px;
  color: #726f6f;
  padding:0 26px 0 10px;
  outline: none;
  border: 1px solid #adabab;
  border-radius: 12px;
  transition: all 0.5s;
}
.text:focus{
  transform:scale(1.1,1.1);
  border: 1px solid #f8b6b6;
}
.search span{
  font-size: 18px;
  position: absolute;
  top: 1px;
  right: 12px;
}
</style>
