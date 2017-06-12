<!--suppress ALL -->
<template>
  <div>
  	<router-view></router-view>
  </div>
</template>

<script>
  import resTypes from './utils/resTypes'

  export default {
  	data () {
      return {
      }
    },
    beforeCreate() {
      // 路由切换时，不会再调用
      console.log('app create before')
    },
    created() {
      // 路由切换时，不会再调用
      console.log('app created')
    },
  	watch:{
  	  '$route'(to, from) {
         let resType = '',
             path = to.path
         
         if(path == '/' || path.indexOf('movie') >=0){
           resType = resTypes.movie
         }else if(path.indexOf('book') >=0){
           resType = resTypes.book
         }
         this.$store.commit('changeCurrType', resType)
  	  }
  	}
  }
</script>
