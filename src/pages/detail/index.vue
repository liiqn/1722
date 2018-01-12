<template>
  <div>
    <index-mount></index-mount>
    <index-header></index-header>
    <index-query></index-query>
    <index-swiper :list="swiperInfo"></index-swiper>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexMount from './mount'
  import IndexQuery from './query'
  import IndexSwiper from './swiper'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexMount,
      IndexQuery,
      IndexSwiper
    },
    data () {
      return {
        swiprInfo: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/detail.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperList = data.swiperList
      },
      handleGetDataErr () {
        console.log('err')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style>

</style>
