import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      // meta: { title: 'LUNA HOME 运营端', icon: 'dashboard' }
      meta: { title: 'LUNA HOME 运营端'}
    }]
  },

  // 商品路由
  {
    path: '/product',
    component: Layout,
    redirect: '/product/managementList',
    name: 'product',
    meta: { title: '商品', icon: 'el-icon-s-shop' },
    children: [
      {
        path: 'managementList',
        name: 'managementList',
        // redirect: "/product/magnagementList",
        component: () => import('@/views/product/managementList'),
        meta: { title: '商品管理列表', icon: 'el-icon-minus' },
        children:[
          {
            path: 'finalOrder',
            name: 'finalOrder',
            component: () => import('@/views/product/managementList/finalOrder'),
            meta: { title: '成品订单'},
          },
          {
            path: 'magnagementList',
            name: 'magnagementList',
            component: () => import('@/views/tree/index'),
            meta: { title: '其他订单'},
          },
        ]
      }
    ]
  },
  // 采购单路由
  {
    path: '/purchaseOrder',
    component: Layout,
    children:[
      {
        path: 'c2',
        name: 'c2',
        component: () => import('@/views/purchaseOrder'),
        meta: { title: '采购单', icon: 'el-icon-s-order' },
      }
    ]
  },


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
