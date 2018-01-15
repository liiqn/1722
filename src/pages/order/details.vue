<template>
	<div>
 	<div class="details">
 		<div class="name">
 			<li class="name-one">【上午场】 故宫成人票+故宫全景手绘地图</li>
 			<li>
 					<img src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png" class="uu">
 					<strong>2018-01-11 </strong>
 					<img src="https://img1.qunarzz.com/piao/fusion/1703/dc/b515f102c483d002.png">
 					<strong>不可退</strong>
 			</li>
 		</div>
 		<div class="fare">
 			<li><b>¥</b><i>50</i> <span>张/起</span></li>
 			<li class="notice">预定须知</li>
 		</div>
 	</div>
 	<div class="min"></div>
  </div>
</template>

<script>
  export default {
    name: 'index-details'
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .details
  	display: flex
  	font-size: .35rem
  	line-height: .5rem
  	padding: .2rem 
  	width: 100%
  	height: 1.66rem
		.name
			float: left
			height: 1.66rem
			width: 5.4rem
			.name-one
				height: 1.2rem
			img
				float: left
				width: .24rem
				height: .24rem
				padding: .1rem 0 0 .05rem
			strong
				font-size: .26rem
				float: left
				padding: 0 .1rem
		.fare
			padding: .1rem 0 0 .2rem
			line-height: .6rem
			b
				color: #ff8309
				font-size: .2rem
			i
				color: #ff8309
				font-size: .34rem
			span
				color: #8f8f8f
				font-size: .26rem
			.notice
				color: #7dbabd
				font-size: .31rem
	.min
		height: .2rem
		background: #f5f5f5	
</style>
