<template>
  <div @click="handleHideClick" v-show="toggle" class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" src="" alt="" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'index-swiper',
    props: {
      list: Array
    },
    data () {
      return {
        toggle: true,
        swiperOption: {
          loop: true,
          pagination: '.swiper-pagination',
          paginationType: 'fraction'
        }
      }
    },
    methods: {
      handleHideClick () {
         this.toggle = false
      }
    }
}

</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .swiper
    background: black
    position: fixed
    display: flex
    jusitify-content: space-between
    align-items: center
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 999
    .swiper-img
      width:100%
</style>
