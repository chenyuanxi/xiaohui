<template>
  <div>
    <Title message="购物车">
      <div slot="left">></div>
    </Title>
    <div class="shoopCart">
      ShoopCart
    </div>
  </div>
</template>

<script>
import Title from '../components/Header/Title'
export default {
  name: 'ShoopCart',
  components: {
    Title
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
