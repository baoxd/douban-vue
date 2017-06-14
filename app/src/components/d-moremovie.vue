<template>
    <div>
		<!-- 头 -->
		<d-header></d-header>
		<!-- 列表 -->
		<div id="app">
		<h1>影院热映</h1>
			<section id="list" class="grid">
				<router-link v-for="movie in movies" :to="'/movie/detail/'+ movie.id" :key="movie.id" class="item">
						<div class="cover">
							<div class="wp ratio3_4">
								<img src="https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2459198108.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg" alt="新木乃伊" data-x="800" data-y="738" class="img-show" style="width: 100%;">
							</div>
						</div>
						<div class="info">
							<h4></h4>
							<h3>新木乃伊 </h3>
							<p class="rank">
								<span class="rating-stars" data-rating="2.4">
									<span class="rating-star rating-star-small-full"></span>
									<span class="rating-star rating-star-small-full"></span>
									<span class="rating-star rating-star-small-gray"></span>
									<span class="rating-star rating-star-small-gray"></span>
									<span class="rating-star rating-star-small-gray"></span>
								</span> <span>4.8</span>	
							</p>
							<p class="meta">艾里克斯·库兹曼/汤姆·克鲁斯/罗素·克劳/安娜贝拉·沃丽丝/动作/奇幻/冒险/2017-06-09(中国大陆/美国)</p>
			        		<cite></cite>
						</div>
				</router-link>
			</section>
		</div>
	</div>
</template>

<script>
 import style from "../../../public/css/more.css";
 import { hotMovies, freeMovies, newMovies } from '../utils/staticData'
 import { mapState } from 'vuex'
 import DHeader from './d-header'

 export default {
   data() {
     return {
       title: '',
       movies: []
     }
   },
   computed: mapState['currResType'],
   created() {
   	 let route = this.$route
  
     if(route.path == '/movie/hotmore'){
     	this.movies = hotMovies
     }else if(route.path == '/movie/freemore'){
     	this.movies = freeMovies
     }else if(route.path == '/movie/newmore'){
     	this.movies = newMovies
     }
     console.log(this.movies)
   },
   components: {
     DHeader
   }
 }
</script>