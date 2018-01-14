<template>
  <div class="main">
    <index-header></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-icons :list="iconsInfo"></index-icons>
    <!-- <index-iconsbottom></index-iconsbottom> -->
    <div class="recommend">热门推荐</div>
    <index-scroller  class="scroller" :list="sightInfo"></index-scroller>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexSwiper from './swiper'
  import IndexIcons from './icons'
  // import IndexIconsbottom from './iconsbottom'
  import IndexScroller from './scroller'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexIcons,
      // IndexIconsbottom,
      IndexScroller
    },
    data () {
      return {
        swiperInfo: [],
        iconsInfo: [],
        sightInfo: [],
        autoplay: {
          disableOnInteraction: false
        }
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/index.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.iconsInfo = data.pageList
        this.sightInfo = data.sightsList
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style scoped lang="stylus">
.main
  display: flex
  flex-direction: column
  position: absolute
  left: 0
  top: 0
  right: 0
  bottom: 0
  .recommend
    padding-left:.3rem
    line-height: .68rem
    background: #f5f5f5
  .scroller
    flex: 1
    overflow: hidden
</style>
