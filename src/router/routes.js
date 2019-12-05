
const routes = [
  {
    path: '/',
    // component: () => import('layouts/MyLayout.vue'),
    name: 'Dashboard',
    component: () => import('layouts/MainPage.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/StatusScreen',
    name: 'Status',
    component: () => import('layouts/MainPage.vue'),
    children: [
      { path: '', component: () => import('pages/Status.vue') }
    ]
  },
  {
    path: '/CreateSecurity/',
    name: 'Create',
    component: () => import('layouts/MainPage.vue'),
    children: [
      { path: '*', component: () => import('pages/CreateSecurity.vue') }
    ]
  }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
