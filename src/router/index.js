import Vue from 'vue'
import Router from 'vue-router'

// 懒加载路由 导入
const Home = () => import('views/home/Home.vue')
const Cart = () => import('views/cart/Cart.vue')
const Category = () => import('views/category/Category.vue')
const Profile = () => import('views/profile/Profile.vue')

Vue.use(Router)

// 配置路由映射关系
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 实例路由
const router = new Router({
  routes,
  mode: 'history'
})

export default router