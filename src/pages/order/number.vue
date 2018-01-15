<template>
	  <div class="number">
	  	<div class="explain">
	  		<span>购买数量</span>
	  		<span class="max">最多买五张</span>
	  	</div>
	  	<div class="num iconfont">
	  		<b class="cool" @click="handleCoolClick">&#xe6fe;</b>
	  		<input type="text" v-model="inputValue" class="box">
	  		<b class="add" @click="handleAddClick">&#xe6b9;</b>
	  	</div>
	  </div>
</template>

<script>
export default {
  name: 'number',
  template: '',
  data () {
  	return {
  		inputValue: "1",
  		list: [1]
  	}
  },
  methods: {
  	handleAddClick: function () {
			if (this.inputValue <= 4) {
			this.inputValue++
			this.list.push(this.inputValue)
			this.handleMessage(this.list)
		}
	},
	handleCoolClick: function (index) {
		if (this.inputValue >= 2) {
			this.inputValue--
			this.list.pop()
			this.handleMessage(this.list)
		}
	},
	handleMessage: function () {
		this.$bus.$emit('change', this.list)
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.number
		align-items: center
		border-bottom: .22rem solid #f5f5f5
		height: 1.22rem
		position: relative
		display: flex
		.explain
			float: left
			text-align: center
			line-height: 1.22rem
			padding-left: .15rem
			width: 2.94rem
			.max
				color: #d2d2d2
		.num
			border: 0.02rem solid #f5f5f5
			height: .6rem
			justify-content: flex-end
			position: absolute
			right: 2%
			width: 1.92rem
			.cool
				background: #efefef
			.bg
				background: $bgColor
			b
				float: left
				height: 100%
				text-align: center
				line-height: .6rem
				width: 33.3%
			.add
				background: $bgColor
			.box
				border: none
				float: left
				height: 100%
				text-align: center
				width: 33%

</style>
