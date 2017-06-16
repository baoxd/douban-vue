import resTypes from '../utils/resTypes'
import test from './modules/test'

const API = 'http://localhost:3456/'

const store = {
  state: {
  	// 当前资源类型，默认是电影
    currResType: resTypes.movie,
    hotMovies: null
  },

  actions: {
    getHotMovies({commit}) {
      let url = API + 'movies/hotmovies'

      fetch(url).then(function(res){
        return res.json();
      }).then(function(data){
        commit('setHotMovies', data.movies)
      })
    }
  },

  mutations: {
  	// 切换当前资源类型
    changeCurrType(state, type){
      state.currResType = type
    },
    // 设置热门电影
    setHotMovies(state, movies){
      console.log(movies)
      state.hotMovies = movies
    }
  },
  modules: {
    test
  }
}

export default store
