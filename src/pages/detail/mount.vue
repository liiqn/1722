<template>
  <div class="header-mount">
    <p class="mount-icon">d</p>
    <p>故宫</p>
  </div>
</template>

<script>
  export default {
    name: 'index-mount'
  }
</script>

<style type="text/css" lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header-mount
    /*display: none*/
    position: fixed
    top: 0
    left:0
    z-index: 99
    width: 100%
    height: .88rem
    background: #00bcd4
    text-align: center
    line-height: .88rem
    color: white
    font-size: .32rem
  .mount-icon
    position: absolute
    left: 0rem
    top: 0rem
    background: red
    width: .8rem
    height: .88rem
</style>
