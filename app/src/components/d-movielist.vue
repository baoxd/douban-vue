<template>
  <section id="movie_showing">
    <header>
	  <h2>{{ title }}</h2>
	  <!-- <a href="/movie/nowintheater?loc_id=108288">更多</a> -->
	  <router-link v-bind:to="morelink">更多</router-link>
	</header>
    <div class="section-content">
      <ul class="row items">
        <!-- <template v-for="movie in movies"> -->
          <li v-for="movie in movies" class="item item__movie" :key="movie.id">
            <a v-on:click="gotoMovieDetail(movie.id, $event)">
        	  <div class="item-poster" :style="{backgroundImage: 'url(' +movie.poster+')'}">
        	  </div>
              <span class="item-title">{{ movie.name || movie.title }}</span>
              <div class="item-rating">
                <div class="rank">
                  <span class="rating-stars" data-rating="3.6">
                    <span class="rating-star rating-star-small-full"></span>
                    <span class="rating-star rating-star-small-full"></span>
                    <span class="rating-star rating-star-small-full"></span>
                    <span class="rating-star rating-star-small-full"></span>
                    <span class="rating-star rating-star-small-gray"></span>
                  </span> 
                  <span>7.3</span>
                </div>
              </div>
            </a>
          </li>
        <!-- </template> -->
      </ul>
    </div>
  </section>
</template>

<script>

  export default {
    props: ['movies', 'title', 'movietype'],
    computed: {
      morelink(){
      	let url = '',
      		movietype = this.movietype
      	if(movietype === 'hot'){
      	  url = '/movie/hotmore'
      	}else if(movietype === 'free'){
      	  url = '/movie/freemore'
      	}else if(movietype === 'new'){
      	  url = '/movie/newmore'
      	}
      	return url
      }
    },
    methods: {
      gotoMovieDetail(id, event){
      	console.log(id)
      	// this.$router.push()
      }
    }
  }
</script>