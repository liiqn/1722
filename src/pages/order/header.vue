<template>
  <div class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="order-write">订单填写</div>
    <div class="login">登录</div>
  </div>
</template>

<script>
export default {
  name: 'index-header'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .header
    background: $bgColor
    color: #fff
    display: flex
    font-size: .32rem
    height: .88rem
    line-height: .88rem
    .back
      font-size: .4rem
      font-weight: bold
      text-align: center
      width: .58rem
    .order-write
      flex: 1
      text-align: center
    .login
      padding: 0 .4rem 0 .2rem
        

</style>
