import resTypes from '../utils/resTypes'

const store = {
  state: {
  	// 当前资源类型，默认是电影
    currResType: resTypes.movie
  },

  action: {

  },

  mutations: {
  	// 切换当前资源类型
    changeCurrType(state, type){
      state.currResType = type
    }
  }

}

export default store
