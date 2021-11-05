import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = new VueRouter({
  mode: 'history',
  /* 
  removes extra # getting appended due to vue router defaults to hash mode, which is what you're seeing...

  See: https://router.vuejs.org/en/essentials/history-mode.html
  */
  linkActiveClass: 'active',
  routes,
})

export default router
