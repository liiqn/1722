<template>
  <div class="footer ">
    <div class="price iconfont"><span>产品价格 ¥</span><b v-model="price">{{price}}</b><i>&#xe611;</i></div>
      <div class="order" @click="handleOrderClick">提交订单</div> 
	</div>

</template>

<script>
  export default {
    name: 'index-footer',
    data () {
      return {
        list: Array,
        flag: true,
        price: 50
      }
    },
    methods: {
      handleOrderClick: function () {

      },
      bindEvents () {
        this.$bus.$on('change', this.handleMassage.bind(this))
      },
      handleMassage (list) {
        this.price = 50 * (list.length+1)
      }
    },
    created () {
      this.bindEvents()
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
    .footer
      align-items: center;
      border-top: .02rem solid #ddd;
      bottom: 0
      left:0
      display: flex
      height: .8rem
      line-height: .8rem
      position: fixed
      text-align: center
      width: 100%
      .price
        background: #fff
        color: #ff9800
        float: left
        height: 100%
        width: 50%
        span
          font-size: .24rem
        b
          font-size: .4rem
      .order
        background: #ff9800
        color: #fff
        float: right
        height: 100%
        width: 50%
</style>
