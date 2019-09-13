<template>
  <div class="wrap">
    <ul class="list" :class="{top: animate}">
      <li v-for="(item, index) in list" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      animate: false,
      list: [
        '荣耀20',
        'Nova5 Pro',
        '荣耀9X',
        'HUAWEI P30',
        '荣耀畅玩'
      ]
    }
  },
  created: function () {
    setInterval(this.UpDownScroll, 3000)
  },
  methods: {
    UpDownScroll () {
      this.animate = true
      setTimeout(() => {
        this.list.push(this.list[0])
        this.list.shift()
        this.animate = false
      }, 500)
    }
  }
}
</script>
<style scoped>
.wrap{
  width: 90%;
  height: 24px;
  margin-left: 1.6rem;
  overflow: hidden;
}
.list li {
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  color: #f82727;
  padding-left: 6px;
}
.top {
  transition: all 0.5s;
  margin-top: -24px;
}

</style>
