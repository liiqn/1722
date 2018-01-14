<template>
  <div class="iconsbottom">

      <div class="iconsbottom-topleft">
      定位失败
      </div>
      <div class="right">
        五折泡温泉
      </div>
  </div>
</template>

<script>
export default {
  name: 'index-iconsbottom'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .iconsbottom
    display: flex
    height: 1.48rem
    background: #f5f5f5
    padding-top: .01rem
    .iconsbottom-topleft
      line-height:.85rem
      width: 49.5%
      height: .85rem
      background: #fff
      text-align: center
    .right
      line-height:.85rem
      margin-left: 1%
      width: 49.5%
      height: .85rem
      background: #fff
      text-align: center

</style>
