import Vue from 'vue'
import VueRouter from 'vue-router'

 const originalPush = VueRouter.prototype.push
 VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
 }

Vue.use(VueRouter)
const routes = [
  {
    path:'/detials',
    component:()=>import('../views/details.vue'),
  },
  {
    path:'/question',
    component:()=>import('../views/question.vue')
  },
  {
    path:'/',
    component:()=>import('../views/Home.vue')
  },
  {
    path:'/catagory/:aid/:cid',
    component:()=>import("../views/question.vue")
  },
  {
    path:'/catagory/:aid/:cid/:bid',
    component:()=>import("../views/details.vue")
  },
  {
    path:'/admin/',
    component:()=>import("../views/Login1.vue")
  },
  {
    path:'/admin/Register',
    component:()=>import("../views/Register.vue")
  },
  {
    path:'/admin/manage',
    component:()=>import("../views/manage.vue")
  },
  { 
    name:"cha_zhao",
    path:'/s',  
    component:()=>import("../views/question copy.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router