import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../components/p11/ArticleView.vue'
import SubView from '../components/p11/SubView.vue'
import ContentView from '../components/p11/ContentView.vue'
import PageView from '../components/p11/PageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/article/:id',
      // path: '/article/:id?',
      // path: '/article/:id*',
      // path: '/article/:id(\\d{1,3})',
      name: 'article',
      component: ArticleView,
      props: true,
    },
    {
      path: '/multi/:id',
      name: 'multi',
      components: {
        default: ArticleView,
        sub: SubView
      },
      props: {
        default: true,
        sub: false
      }
    },
    {
      path: '/content/:id',
      name: 'content',
      component: ContentView,
      props: true,
      children: [
        {
          path: 'page/:page_num',
          name: 'page',
          component: PageView,
          props: true,
        }
      ]
    },
  ]
})

export default router
