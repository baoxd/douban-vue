<!--suppress ALL -->
<template>
  <div>
  	<router-view></router-view>
  </div>
</template>

<script>
  export default {
  	data () {
      return {
      }
    },
	watch:{
	  '$route'(to, from) {
	  	 console.log(to)
	  	 console.log(from)
	  }
	}
  }
</script>
