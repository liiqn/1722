<template>
	<div>
		<index-header></index-header>
 	  <index-details></index-details>
 	  <index-date></index-date>
	</div>
</template>

<script>
  import IndexHeader from './header'
  import IndexDetails from './details'
  import IndexDate from './date'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexDetails,
      IndexDate
    }
  }
</script>

<style>
</style>
