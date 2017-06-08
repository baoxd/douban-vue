<template>
  <div>
    <d-header />
    <d-content />
  </div>
</template>

<script>
  import DHeader from './d-header'
  import DContent from './d-content'

  export default {
  	data() {
  		return{}
  	},
  	components: {
  	  DHeader,
  	  DContent
  	}
  }

</script>