<template>
  <div class="header">
		<div class="back iconfont">&#xe624;</div>
		<div class="country">
			<div class="domestic">国内</div>
			<div class="overseas">海外</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'index-header'
}
</script>

<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.header
	  display: flex
	  height: .88rem
	  line-height: .88rem
	  background: $bgColor
	  .back
	  	width: .58rem
	  	text-align: center
	  	font-size: .4rem
	  	font-weight: bold
	  	color: #fff
	  .country
	  	overflow: hidden
	  	margin: 0.13rem 1.1rem
	  	width: 4.1rem
	  	height: 0.57rem
	  	padding:0.05rem 0.05rem 0.02rem
	  	border-radius: 0.1rem
	  	background: white
				.domestic
	  			float: left
	  			width: 2.05rem
	  			height: 0.54rem
	  			line-height: 0.54rem
	  			text-align: center
	  			color: #00bcd4
	  		.overseas
	  			float: left
	  			width: 2.05rem
	  			height: 0.54rem
	  			line-height: 0.54rem
	  			text-align: center
	  			background: #00bcd4
	  			color: white
</style>
