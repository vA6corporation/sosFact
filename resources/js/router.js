import Vue from 'vue'
import Router from 'vue-router'
// import store from './store'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: () => import('./views/home/Home') },
    { path: '/invoices', component: () => import('./views/invoice/Invoices') },
    { path: '/invoices/create', component: () => import('./views/invoice/Create') },
  ]
});


// router.onError(error => {
//   if (/loading chunk \d* failed./i.test(error.message)) {
//     alert('Se ha actualizado el sistema, porfabor recarge la pagina');
//   }
// });

// router.beforeEach((to, from, next) => {
//   if (store.getters['system/authenticated'] && store.getters['system/isSetOffice']) {
//     if (store.getters['system/isAuthorized'](to.name)) {
//       next();
//     } else {
//       next({ path: '/dashboard' });
//     }
//   } else {
//     if (to.path == '/login' || to.path == '/setOffice' || to.path == '/deployment') {
//       next();
//     }
//   }
// });

export default router;
