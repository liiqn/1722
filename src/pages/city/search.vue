<template>
  <div class="search">
  	<input type="text" class="search-text" placeholder="输入城市或拼音">
  </div>
</template>

<script>
export default {
  name: 'index-search'
}
</script>

<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.search
		height: 0.6rem
		padding: 0.1rem 0.2rem
		background: $bgColor
		.search-text
			width: 100%
			height: 0.5rem
			outline: none
			border: none
			text-align: center
			border-radius: 0.1rem
			
</style>
