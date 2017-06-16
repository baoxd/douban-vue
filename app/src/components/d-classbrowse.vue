<template>
	<section class="types">
		<header>
			<h2>分类浏览</h2>
		</header>
		<div class="section-content">
			<a name="cate"></a>
			<ul class="type-list">
				<li v-for="(item, index) in list" :key="index">
				  <a @click="goToClassType(index, $event)" href="javascript:;">{{ item.title }}<span></span></a>
				</li>
            </ul>
		</div>
	</section>
</template>

<script>
  import { mapState } from 'vuex'
  import resTypes from '../utils/resTypes'

  export default {
  	data() {
  	  return {
  	  	list: null,
  	  	movielist: [],
  	  	booklist: []
  	  }
  	},
  	computed: mapState([
  	  'currResType'
  	]),
  	methods: {
  	  goToClassType(id, event) {
        console.log(id)
        console.log(event)
  	  },
  	  changeData(newType) {
        if(newType == resTypes.movie){
          this.list = this.movielist
        }else if(newType == resTypes.book){
          this.list = this.booklist
        }
  	  }
  	},
  	watch: {
      currResType(newType) {
      	this.changeData(newType)
      }
  	},
  	created() {
	  this.movielist = [
	  	{
		    title:"经典",
			link:"/movie/classic"
		  },
		  {
			title:"冷门佳片",
			link:"/movie/underrated"
		  },
		  {
			title:"豆瓣高分",
			link:"/movie/doubantop"
		  },
		  {
			title:"动作",
			link:"/movie/action"
		  },
		  {
			title:"喜剧",
			link:"/movie/comedy"
		  },
		  {
			title:"爱情",
			link:"/movie/love"
		  },
		  {
			title:"悬疑",
			link:"/movie/mystery"
		  },
		  {
			title:"恐怖",
			link:"/movie/horror"
		  },
		  {
			title:"科幻",
			link:"/movie/scifi"
		  },
		  {
			title:"治愈",
			link:"/movie/sweet"
		  },
		  {
			title:"文艺",
			link:"/movie/artfilm"
		  },
		  {
			title:"成长",
			link:"/movie/youth"
		  },
		  {
			title:"动画",
			link:"/movie/animation"
		  },
		  {
			title:"华语",
			link:"/movie/chinese"
		  },
		  {
			title:"欧美",
			link:"/movie/western"
		  },
		  {
			title:"韩国",
			link:"/movie/korean"
		  }
	  ]
	  this.booklist = [
	  	  {
		title:"小说",
		link:"/book/novel"
	  },
	  {
		title:"爱情",
		link:"/book/love"
	  },
	  {
		title:"历史",
		link:"/book/history"
	  },
	  {
		title:"外国文学",
		link:"/book/foreign"
	  },
	  {
		title:"青春",
		link:"/book/youth"
	  },
	  {
		title:"励志",
		link:"/book/motivation"
	  },
	  {
		title:"随笔",
		link:"/book/essay"
	  },
	  {
		title:"传记",
		link:"/book/bio"
	  },
	  {
		title:"推理",
		link:"/book/detective"
	  },
	  {
		title:"旅行",
		link:"/book/travel"
	  },
	  {
		title:"奇幻",
		link:"/book/fantasy"
	  },
	  {
		title:"经管",
		link:"/book/business"
	  }
	  ]
	  this.changeData(this.currResType)
  	}
  }
</script>