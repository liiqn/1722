<template>
  <div ref="scroller">
    <ul class="content">
       <li class="item" v-for="item of list" :key="item.id">
          <a href="">
            <div class="sight-list"><img class="sight-img" :src="item.imgurl" /></div>
            <div class="sight-name">{{item.tittle}}</div>
            <div class="sight-desc">{{item.desc}}</div>
            <div class="sight-price"><span class="rmb">￥</span><span class="price">{{item.price}}</span>  起</div>
          </a>
       </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'index-scroller',
  props: {
    list: Array
  },
  watch: {
    list () {
      this.scroller.refresh()
    }
  },
  mounted () {
    this.scroller = new BScroll(this.$refs.scroller)
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .item
    position: relative
    left: 0
    top: 0
    height: 1.8rem
    border-bottom: .01rem solid #f0f0f0
    .sight-list
      position: absolute
      top: .22rem
      left: .22rem
      width: 1.4rem
      height: 1.4rem
      .sight-img
        width: 1.4rem
        height: 1.4rem
    .sight-name
      position: relative
      top: .28rem
      left: 2.0rem
      font-size: .3rem
      color #212121
    .sight-desc
      position: relative
      top: .44rem
      left: 2.0rem
      color #9e9e9e
    .sight-price
      position: relative
      top: .64rem
      left: 2.0rem
      font-size: .16rem
      color #9e9e9e
      .rmb
        color #ff8300
      .price
        font-size: .42rem
        color #ff8300


 </style>


