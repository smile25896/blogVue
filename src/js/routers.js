// import Home from './components/home.vue'

const Home = {
	templete: "<div>Home</div>"
}

const routers = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }，
  {
    path: '/',
    component: Home
  }，
]
export default routers