// const Home = r => require(['./components/home'], r)
// const NotFound = r => require(['./components/notfind'], r)
import DHome from './components/d-home'
import NotFound from './components/notfind'

/*
	路由数组
*/
const routes = [{
	path: '',
	component: DHome
}]

routes.push({
	path: '*',
	name: 'notfind',
	component: NotFound
})

export default routes