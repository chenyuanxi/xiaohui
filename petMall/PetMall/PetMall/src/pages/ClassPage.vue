<template>
  <div>
    <Title message="分类">
      <div slot="left">></div>
      <div slot="right"><span class="iconfont icon-chazhao search-img"></span></div>
    </Title>
    <div class="classPage">ClassPage</div>
    <div>{{content}}</div>
  </div>
</template>

<script>
import Title from '../components/Header/Title'
import api from '../api/index.js'

export default {
  data: function () {
    return {
      content: ''
    }
  },
  mounted: function () {
    api.getNews().then(response => {
      this.content = response
      console.log(this.content)
    })
  },
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
