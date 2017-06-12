<template>
	<section id="book_fiction">
		<header>
			<h2>{{ title }}</h2>
			<router-link :to="morelink">更多</router-link>
		</header>
		<div class="section-content">
			<ul class="row items">
				<li class="item item__book" v-for="book in books">
					<a @click="gotoBookDetail(book.id, $event)">
						<div class="item-poster" :style="{backgroundImage:'url('+ book.poster +')'}">
						</div>
						<span class="item-title">{{ book.name }}</span>
							<div class="item-rating">
							<div class="rank">
								<span class="rating-stars" data-rating="4.2">
									<span class="rating-star rating-star-small-full"></span>
									<span class="rating-star rating-star-small-full"></span>
									<span class="rating-star rating-star-small-full"></span>
									<span class="rating-star rating-star-small-full"></span>
									<span class="rating-star rating-star-small-gray"></span>
								</span> 
								<span>8.3</span>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
  import style from "../../../public/css/home.css";

  export default {
    props: ['books', 'title', 'booktype'],
    computed: {
      morelink() {
        let url = '',
            booktype = this.booktype

        if(booktype == 'hotfiction'){
          url = '/book/hotfiction'
        }else if(booktype == 'hotnonfiction'){
          url = '/book/hotnonfiction'
        }
        return url
      }
    },
    methods: {
      gotoBookDetail(bookId, event) {
      	console.log(bookId)
      	console.log(event)
      }
    }
  }
</script>