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
  import { movieMore, bookMore } from '../utils/findMoreData'
  import resTypes from '../utils/resTypes'

  export default {
  	data() {
  	  return { 
  	  	title: '',
  	  	list: null
  	  }
  	},
  	computed: mapState(['currResType']),
  	watch: {
  	  currResType(newType) {
  	  	this.changeData(newType)
  	  }
  	},
  	methods: {
  	  gotoDetail(id, event) {
        console.log(id)
        console.log(event)
  	  },
  	  changeData(newType) {
  	  	if(newType == resTypes.movie){
  	  	  this.title = '发现好电影'
  	  	  this.list = movieMore
  	  	}else if(newType == resTypes.book){
  	  	  this.title = '发现好图书'
  	  	  this.list = bookMore
  	  	}
  	  }
  	},
  	created() {
  	  this.changeData(this.currResType)
  	}
  }
</script>