// 热门电影
module.exports = (req, res) => {
  res.send({
    movies:[
	  {
	    id:'1',
	    poster: 'https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2453176400.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg',
	    name: '攻壳机动队'
	  },
	  {
	    id:'2',
	    poster: 'https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2436030518.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg',
	    name: '金刚：骷髅岛'
	  },
	  {
	    id:'3',
	    poster: 'https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2448676053.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg',
	    name: '嫌疑人X的献身'
	  },
	  {
	    id:'4',
	    poster: 'https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2453197648.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg',
	    name: '非凡任务'
	  },
	  {
	    id:'5',
	    poster: 'https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2417948644.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg',
	    name: '美女与野兽'
	  },
	  {
	    id:'6',
	    poster: 'https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2445601403.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg',
	    name: '绑架者'
	  }
	]
  });
}