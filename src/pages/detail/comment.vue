<template>
  <div class="comment iconfont">
    <p class="comment-h2">&#xe62a; 用户评论</p>
    <div v-for="item of list" class="comment-tip">
      <div class="comment-tip-top">
        <span>&#xe607;&#xe607;&#xe607;&#xe607;</span>
        <p>
          <span :name="item.name">KR</span>
          <span :data="item.data">2018-01-12</span>
        </p>
      </div>
      <div>
        <p></p>
        <div class="comment-img">
          <img v-for="item2 of item.img" :src="item2.imgSrc" alt=""/>
        </div>
      </div>
      <span>&#xe611;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-comment',
    props: {
      list: Array
    }
  }

</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .comment
    background: white
    margin-top: .15rem
    .comment-h2
      height: .7rem
      line-height: .7rem
      padding: 0 .2rem
      box-sizing: border-box
  .comment-tip
    width: 100%
    height: 3rem
    border-top: 1px solid #e0e0e0
    padding: 0 .2rem
    box-sizing: border-box
    .comment-tip-top
      display: flex
      justify-content: space-between
      align-items: center
    .comment-img img
      width: 32%
      margin-right: .08rem
</style>
