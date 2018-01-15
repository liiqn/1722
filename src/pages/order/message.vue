<template>
  <div>
    <ul class="iconfont">
      <li><span>游客1</span><input type="text" placeholder="请输入姓名"><b>&#xe614;</b></li>
      <li><span>手机号</span>+86&gt;
        <input type="text" name="email" placeholder="请输入手机号" class="{cool: showColor, bg: showColor}" v-model="phone" >
      </li>
      <li><span>身份证</span><input type="text" placeholder="请输入身份证号" class="Id"></li>
    </ul>
   
    <ul class="iconfont" v-for="(item, index) of list">
      <li><span>游客1</span><input type="text" placeholder="请输入姓名"><b>&#xe614;</b></li>
      <li><span>身份证</span><input type="text" placeholder="请输入身份证号"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'index-message',
    data () {
      return {
        showColor: false,
        list: Array,
        flag: true,
        phone: ''
      }
    },
    methods: {
      bindEvents () {
        this.$bus.$on('change', this.handleMassage.bind(this))
      },
      handleMassage (list) {
        if (this.flag) {
          this.list = list.shift()
          this.flag = false
        } else {
          this.list = list
        }
      }
    },
    created () {
      this.bindEvents()
    },
    watch: {
      phone (val) {
        if (!val) {
          return
        }
        if (!/^1[34578]\d{9}$/.test(val)) {
          this.showColor = !this.showColor
          alert('手机号输入有误，请重新输入')
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  ul
    padding-left: .3rem
    li
      border-bottom: .02rem solid #efefef
      height: 1rem
      line-height: 1rem
      span
        float: left
        font-size: .28rem
        width: 1.34rem
      input
        border: none
        padding-left: .4rem
        width: 59%
      b
        padding-right: .4rem
     .cool
        color: red
      .gb
        color: red
        
        
     

  
</style>
