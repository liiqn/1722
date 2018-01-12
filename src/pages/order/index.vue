<template>
   <div>
  	<index-header></index-header>
 	<index-details></index-details>
</div>
</template>

<script>
  import IndexHeader from './header'
  import IndexDetails from './details'

  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexDetails
    }
  }
</script>

<style>
</style>
