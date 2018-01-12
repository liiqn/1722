<template>
	<div>
  	<index-header></index-header>
  	<index-search></index-search>
  	<index-hot-city></index-hot-city>
	</div>
</template>

<script>
  import IndexHeader from './header'
  import IndexSearch from './search'
  import IndexHotCity from './hotcity'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSearch,
      IndexHotCity
    }
  }
</script>

<style>
</style>