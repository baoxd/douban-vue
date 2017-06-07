// console.log(BASE_URL)
// console.log(process.env.NODE_ENV)
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './app'
import routes from './routes'
import storeOption from './store'

Vue.use(Vuex)
Vue.use(VueRouter)

// 创建路由
const router = new VueRouter({
  mode: 'history',
  routes: routes
})

// 创建store
const store = new Vuex.Store(storeOption)

window.__lendApp__ = new Vue({
  el: '#vue_app',
  router,
  store,
  render: h => h(App)
})

// 输入框在虚拟键盘弹出时，自动滚动到可见位置
document.body.addEventListener('click', function (event) {
  var element = event.target
  var tags = {
    'INPUT': 1,
    'TEXTAREA': 1
  }
  if ((element.tagName in tags)) {
    setTimeout(function () {
      element.scrollIntoViewIfNeeded()
    }, 400)
  }
}, false)
