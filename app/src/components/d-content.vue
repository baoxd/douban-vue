<template>
  <div class="page">
  	<div class="card">
  	  <!-- 电影 -->
  	  <template v-if="currResType === 'movie'">
  	    <!-- 热门电影 -->
  	  	<d-movielist v-bind:movies="hotMoviesList" title="影院热映" movietype="hot"></d-movielist>
  	  	<!-- 免费电影 -->
  	  	<d-movielist v-bind:movies="freeMovies" title="免费在线观影" movietype="free"></d-movielist>
  	  	<!-- 新片速递 -->
  	  	<d-movielist v-bind:movies="newMovies" title="新片速递" movietype="new"></d-movielist>
  	  </template>
  	  <!-- 图书 -->
  	  <template v-else-if="currResType === 'book'">
  	  	
  	  </template>
  	  <!-- 其他 -->
  	  <template v-else>
  	  	
  	  </template>
  	</div>
  	<d-footer></d-footer>
  </div>
</template>

<script>
  import style from "../../../public/css/home.css"
  import { mapState } from 'vuex'
  import DMovielist from './d-movielist'
  import DFooter from './d-footer'
  import {hotMovies, freeMovies, newMovies} from '../utils/staticData'

  export default {
  	data(){
  		return {
  		  // 热门电影
  		  hotMoviesList:[],
   		  // 免费电影
   		  freeMovies: [],
   		  // 新片速递
   		  newMovies: []
  		}
  	},
  	computed: mapState([
  	  'currResType'
  	]),
  	created(){
  	  this.hotMoviesList = hotMovies
  	  this.freeMovies = freeMovies
  	  this.newMovies = newMovies
  	},
  	components: {
  	  DMovielist,
  	  DFooter
  	}
  }
</script>