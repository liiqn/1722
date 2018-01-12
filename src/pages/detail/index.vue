<template>
  <div>
    <index-mount></index-mount>
    <index-header></index-header>
    <index-query></index-query>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexMount from './mount'
  import IndexQuery from './query'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexMount,
      IndexQuery
    }
  }
</script>

<style>

</style>
