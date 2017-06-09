<template>
	<section class="interests">
		<header>
			<h2>发现好电影</h2>
		</header>
		<div class="section-content">
			<ul>
				<li v-for="item in list" :key="item.id" :style="{borderColor: item.color}">
					<a @click="gotoDetail(item.id, $event)" href="javascript:;" :style="{color: item.color}">{{ item.title }}</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
  	data() {
  	  return {
  	  	title: '',
  	  	list: null
  	  }
  	},
  	computed: mapState(['currResType']),
  	methods: {
  	  gotoDetail(id, event) {
        console.log('========== 电影被点击 ========')
        console.log(id)
        console.log(event)
  	  }
  	},
  	created() {
  	  let movieList, bookList

  	  movieList = [
  	  	{
  	  		id: 1,
			title:"同时入选IMDB250和豆瓣电影250的电影",
			color:"#CC3344",
			link:"https://m.douban.com/doulist/968362/"
		},
		{
			id: 2,
			title:"带你进入不正常的世界",
			color:"#2384E8",
			link:"https://m.douban.com/doulist/16002/"
		},
		{
			id: 3,
			title:"用电【影】来祭奠逝去的岁月",
			color:"#4F9DED",
			link:"https://m.douban.com/doulist/190343/"
		},
		{
			id: 4,
			title:"同时入选IMDB250和豆瓣电影250的电影",
			color:"#CC3344",
			link:"https://m.douban.com/doulist/968362/"
		},
		{
			id: 5,
			title:"女孩们的故事【电影】",
			color:"#3BA94D",
			link:"https://m.douban.com/doulist/1125971/"
		},
		{
			id: 6,
			title:"科幻是未来的钥匙——科幻启示录【科幻题材】",
			color:"#FF4055",
			link:"https://m.douban.com/doulist/4253902/"
		}
  	  ]
  	  bookList = [
  	  	{
  	  		id: 1,
			title:"小波看书",
			color:"#42BD56",
			link:"https://m.douban.com/doulist/10372/"
		},
		{
			id: 2,
			title:"村上春树周边",
			color:"#FF4055",
			link:"https://m.douban.com/doulist/105583/"
		},
		{
			id: 3,
			title:"我凭名字认定了你",
			color:"#FF4055",
			link:"https://m.douban.com/doulist/99294/"
		},
		{
			id: 4,
			title:"不可饶恕的女人们",
			color:"#FF4055",
			link:"https://m.douban.com/doulist/35573/"
		},
		{
			id: 5,
			title:"爱欲书",
			color:"#FF4055",
			link:"https://m.douban.com/doulist/38088147/"
		},
		{
			id: 6,
			title:"他们还写侦探小说",
			color:"#FF4055",
			link:"https://m.douban.com/doulist/645579/"
		}
  	  ]

  	  if(this.currResType === 'movie'){
  	  	this.list = movieList
  	  	this.title = '发现好电影'
  	  }else if(this.currResType === 'book'){
  	  	this.list = bookList
  	  	this.title = '发现好图书'
  	  }
  	}
  }
</script>