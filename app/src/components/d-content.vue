<template>
  <div class="page">
  	<div class="card">
  	  <!-- 电影 -->
  	  <template v-if="currResType === 'movie'">
  	    <!-- 热门电影 -->
  	  	<d-movielist v-bind:movies="hotMovies" title="影院热映" movietype="hot"></d-movielist>
  	  	<!-- 免费电影 -->
  	  	<d-movielist v-bind:movies="freeMovies" title="免费在线观影" movietype="free"></d-movielist>
  	  	<!-- 新片速递 -->
  	  	<d-movielist v-bind:movies="newMovies" title="新片速递" movietype="new"></d-movielist>
  	  </template>
  	  <!-- 图书 -->
  	  <template v-else-if="currResType === 'book'">
  	  	<!-- 虚构类图书 -->
        <d-booklist :books="fictitiousBooks" title="最受关注图书｜虚构类" booktype="hotfiction"></d-booklist>
        <!-- 现实类图书 -->
        <d-booklist :books="realityBooks" title="最受关注图书｜非虚构类" booktype="hotnonfiction"></d-booklist>
        <!-- 豆瓣书店 -->
        <!-- <d-bookshop :books="paperBooks"></d-bookshop> -->
  	  </template>
  	  <!-- 其他 -->
  	  <template v-else>
  	  </template>

      <d-findmore></d-findmore>
      <d-classbrowse></d-classbrowse>
  	</div>
  	<d-footer></d-footer>
  </div>
</template>

<script>
  import style from "../../../public/css/home.css"
  import { mapState } from 'vuex'
  import DMovielist from './d-movielist'
  import DBooklist from './d-booklist'
  import DBookshop from './d-bookshop'
  import DFooter from './d-footer'
  import DFindmore from './d-findmore'
  import DClassbrowse from './d-classbrowse'
  import { freeMovies, newMovies, fictitiousBooks, realityBooks, paperBooks} from '../utils/staticData'

  export default {
  	data(){
  		return {
  		  // 热门电影
  		  // hotMoviesList:[],
   		  // 免费电影
   		  freeMovies: [],
   		  // 新片速递
   		  newMovies: [],
        // 虚构类图书
        fictitiousBooks: [],
        // 现实类图书
        realityBooks: [],
        // 豆瓣纸书
        paperBooks: []
  		}
  	},
  	computed: mapState([
  	  'currResType',
      'hotMovies'
  	]),
    beforeCreate(){
      this.$store.dispatch('getHotMovies')
    },
  	created(){
  	  // this.hotMoviesList = hotMovies
  	  this.freeMovies = freeMovies
  	  this.newMovies = newMovies
      this.fictitiousBooks = fictitiousBooks
      this.realityBooks = realityBooks
      this.paperBooks = paperBooks
      // console.log(this.$store.state.test.test)
  	},
  	components: {
  	  DMovielist,
      DBooklist,
      DBookshop,
      DFindmore,
      DClassbrowse,
  	  DFooter
  	}
  }
</script>