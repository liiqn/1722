<template>
  <div class="date">
  	<div class="day bar">游玩日期</div>
    <div class="today"><li>今天</li><li>1月11日</li></div>
    <div :class="{cool: showColor, bg: showColor}" @click="handleClick"><li>明天</li><b>1月12日</b></div>
    <div class="day"><li>其他日期</li></div>
  </div>
</template>

<script>
  export default {
    name: 'index-date',
    data () {
      return {
        showColor: false  
      }
    },
    methods: {
      handleClick: function () {
        this.showColor = !this.showColor
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
    .date
      border-bottom: .02rem solid #f5f5f5
      display: flex
      height: 1.32rem
      padding: .12rem .2rem 0 0
      div
        border-radius: .1rem
        border: 1px solid #bdbdbd
        float: left
        height: .84rem
        margin: .14rem .14rem .14rem .12rem
        text-align: center
        line-height: .4rem
        width:22%
      .day
        line-height: .84rem
      .bar
        border: none
      .today
        border: 1px solid #dedede
        color: #dedede
      b
        color: #8a8a8a
      .cool
        background: $bgColor
      .gb
        background: #fff

</style>
