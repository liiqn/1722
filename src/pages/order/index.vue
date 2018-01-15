<template>
  <div>
  	<index-header></index-header>
 		<index-details></index-details>
 		<index-date></index-date>
 		<index-number></index-number>
 		<index-message></index-message>
		<index-footer></index-footer>
	</div>
</template>

<script>
  import IndexHeader from './header'
  import IndexDetails from './details'
  import IndexDate from './date'
  import IndexNumber from './number'
  import IndexMessage from './message'
  import IndexFooter from './footer'


  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexDetails,
      IndexDate,
      IndexNumber,
      IndexMessage,
      IndexFooter
    }
  }
</script>

<style>
</style>
