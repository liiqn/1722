<template>
  <div class="box">
  	<div class="position">你的位置</div>
  	<div class="current-location">
  		<p class="city">北京</p>
  	</div>
  	<div class="position hot">热门城市</div>
  	<div class="hot-city">
  		<p class="city">北京</p>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'index-hot-city'
}
</script>

<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.box
		height: 7.3rem
		background: $bgCityColor
		.position
			height: 0.53rem
			line-height: 0.54rem
			text-indent: 0.3rem
			color: $fontColor
			border-bottom: 0.01rem solid $boderColor
		.current-location
			display: flex
			align-items: center
			height: 1.1rem
			padding-left: 0.3rem
			background: white
			.city
				width: 28%
				height: 0.56rem
				text-align: center
				line-height: 0.6rem
				border: 0.02rem solid $bgColor
				border-radius: 0.1rem
				color: $bgColor
		.hot
			border-top: 0.01rem solid $boderColor
		.hot-city
			height: 5.05rem
			padding: 0.3rem 0.3rem 0 0.3rem
			border-bottom: 0.01rem solid $boderColor
			background: white
			.city
				width: 28%
				height: 0.56rem
				text-align: center
				line-height: 0.6rem
				border: 0.02rem solid #cecece
				border-radius: 0.1rem
</style>
