// const DHome = r => require(['./components/d-home'], r)
// const NotFound = r => require(['./components/notfind'], r)
import DHome from './components/d-home'
import NotFound from './components/notfind'
import DMoremovie from './components/d-moremovie'

/*
	路由数组
*/
const routes = [
  {
	  path: '',
	  component: DHome
  },
  {
	  path: '/movie',
	  component: DHome
  },
  {
  	path: '/book',
  	component: DHome
  },
  {
    path: '/movie/hotmore',
    component: DMoremovie
  },
  {
    path: '/movie/freemore',
    component: DMoremovie
  },
  {
    path: '/movie/newmore',
    component: DMoremovie
  }
]

routes.push({
  path: '*',
  name: 'notfind',
  component: NotFound
})

export default routes