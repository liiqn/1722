<template>
  <div class="header-query">
    <div class="query-top query-div iconfont">
      <p class="iconfont">
        <span>&#xe62c;</span>
        <span class="query-txt">北京市东城区景山前街4号</span>
      </p>
      <span>&#xe730;</span>
    </div>
    <div class="query-bottom query-div">
      <p>
        <span>&#xe601;</span>
        <span class="query-txt">查看经典简介及开放时间</span>
      </p>
      <span>&#xe730;</span>
    </div>

    <div class="query-grade query-div">
      <p>
        <span>&#xe60a;</span>
        <span class="query-txt">查看经典简介及开放时间</span>
      </p>
      <div>
          <span>...评论</span>
          <span>&#xe730;</span>
      </div>
    </div>

    <div @click="handleShowTipClick" class="query-tip query-div">
      <div>
        <span>&#xe600;</span>
        <span class="query-txt">除法定节假日外，故宫博物馆实现周一闭馆。</span>
        <div class="query-data-tip" v-show="taggle">
          <h2>&#xe600;景区公告</h2>
          <p>除法定节假日外，故宫博物馆实行周一闭关</p>
          <span  @click.stop="handleHideTipClick" class="data-tip-return">&#xe602;</span>
        </div>
      </div>
      <span>&#xe730;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-query',
    data () {
      return {
        taggle: false
      }
    },
    methods: {
      handleShowTipClick () {
        this.taggle = true
      },
      handleHideTipClick () {
        this.taggle = false
      }
    }
  }
</script>

<style rel="stylesheet/stylus" type="text/css" lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header-query
    position: relative
    top: -.08rem
    z-index: 999
  .query-div
    background: white
    box-sizing: border-box
    justify-content: space-between
    align-items: center
    display: flex
    padding:0 .2rem
    height: .88rem
    line-height: .88rem
    width: 100%
    font-size: .28rem
  .query-txt
    margin-left: .2rem
  .query-top
    border-radius: .2rem .2rem 0 0
    border-bottom: .1px solid #f0f0ef
  .query-grade
    margin:.2rem 0
  .query-tip
    background:#fdeede
    color: #f1441a
  .query-data-tip
    position: fixed
    left: 0
    top: 0
    padding: 1.7rem  0
    text-align: center
    box-sizing: border-box
    width: 100%
    height: 100%
    font-size: .4rem
    background: rgba(255,255,255,.8)
  .query-data-tip p
    margin-top: .5rem
    font-size: .28rem
    color: black
  .data-tip-return
    position: fixed
    left: 50%
    bottom: 1rem
</style>
