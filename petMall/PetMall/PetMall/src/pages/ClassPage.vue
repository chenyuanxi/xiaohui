<template>
  <div>
    <Title message="分类">
      <div slot="left">></div>
      <div slot="right"><span class="iconfont icon-chazhao search-img"></span></div>
    </Title>
    <div class="classPage">ClassPage</div>
  </div>
</template>

<script>
import Title from '../components/Header/Title'
export default {
  name: 'ClassPage',
  components: {
    Title
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search-img{
    font-size: 20px;
  }
</style>
