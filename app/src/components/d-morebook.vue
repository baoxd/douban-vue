<template>
	<div>
	  <d-header></d-header>
		<div id="app">
			<h1>{{ title }}</h1>
			<section id="list" class="list">
				<router-link v-for="book in books" :to="'/book/detail'+book.id" :key="book.id" class="item">
					<div class="cover">
						<div class="wp ratio3_4">
							<img src="https://qnmob2.doubanio.com/lpic/s29459533.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg" alt="外婆的道歉信" data-x="177" data-y="179" class="img-show">
							<span class="action-tag">可阅读</span>
						</div>
					</div>
					<div class="info">
						<h4></h4>
						<h3>外婆的道歉信 <span class="action-tag">可阅读</span></h3>
						<p class="rank">
								<span class="rating-stars" data-rating="4.3"><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-gray"></span></span> <span>8.7</span>
						</p>
						<p class="meta">[瑞典] 弗雷德里克·巴克曼/天津人民出版社/2017-5</p>
						<cite></cite>
					</div>
				</router-link>
			</section>
		</div>
	</div>
</template>

<script>
  import DHeader from './d-header'
  import {mapState} from 'vuex'
  import {fictitiousBooks, realityBooks} from '../utils/staticData'
  import style from '../../../public/css/more.css'


  export default {
    data() {
      return {
        title: '',
        books: []
      }
    },
    computed: mapState(['currResType']),
    created() {
      let route = this.$route

      if(route.path == '/book/hotfiction'){
 		this.books = fictitiousBooks
      }else if(route.path == '/book/hotnonfiction'){
      	this.books = realityBooks
      }
    },
    components: {
      DHeader
    }
  }
</script>