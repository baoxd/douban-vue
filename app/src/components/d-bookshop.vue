<template>
	<section id="market_product_book_mobile_web">
		<div id="book_header">
			<header>
				<h2>{{ title }}</h2>
				<router-link to="/book/shop">更多</router-link>
			</header>
			<a @click="gotoBookShop" class="promBook">
				<img class="cover" :src="book.poster" alt="如花在野">
				<div class="content">
					<div class="title">
						<span class="price">¥ {{ book.price }}</span>
						<p class="name">{{ book.name }}</p>
					</div>
					<p class="infoWithoutReviewer">{{ book.desc }}</p>
				</div>
			</a>
		</div>
		<div class="section-content">
			<ul class="row items">
				<li class="item item__market_product_book">
					<a href="https://market.douban.com/book/lynch?utm_campaign=book_freyr_section&amp;utm_source=douban&amp;utm_medium=mobile_web">
						<div class="item-poster" style="background-image: url(https://img1.doubanio.com/view/freyr_page_photo/raw/public/1689.jpg)">
						</div>
						<span class="item-title">与火同行</span>
						<div class="item-rating">
							<div class="rank">
								<span>¥ 34.8</span>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>

  export default {
  	prop: ['books'],
  	data() {
  	  return {
  	  	title: '豆瓣书店',
  	  	book: {
  	  	  name: '如花在野',
  	  	  desc: '花开人自心安，日本花道大师的插花物语',
  	  	  poster: 'https://img3.doubanio.com/view/freyr_page_photo/raw/public/1324.jpg',
  	  	  price: '68'
  	  	}
      }
  	},
  	methods: {
  	  gotoBookShop(event) {
  	  	console.log('进入豆瓣书店')
  	  }
  	}
  }
</script>