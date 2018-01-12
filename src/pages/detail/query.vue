<template>
  <div class="header-query">
    <div class="query-top query-div">1</div>
    <div class="query-bottom query-div">2</div>
  </div>
</template>

<script>
  export default {
    name: 'index-query'
  }
</script>

<style type="text/css" lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header-query
    position: relative
    top: -.05rem
    border-radius: .1rem .1rem 0 0
    z-index: 999
  .query-div
    width: 100%
    height: .88rem
</style>
