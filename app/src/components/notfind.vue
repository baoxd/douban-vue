<template>
  <div style="width:100%;height:100%;">
    <h1>{{ title }}</h1>
    <p>404 Not Found！</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data (){
      return {
        title: '404!',
      }
    }
  }
</script>