import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/home', component: () => import('./views/home/Home') },
    { path: '/invoices', name: 'invoices', component: () => import('./views/invoice/Invoices') },
    { path: '/invoices/create', name: 'invoices', component: () => import('./views/invoice/Create') },
    { path: '/tickets', name: 'tickets', component: () => import('./views/ticket/Tickets') },
    { path: '/tickets/create', name: 'invoices', component: () => import('./views/ticket/Create') },
    { path: '/settings', name: 'settings', component: () => import('./views/setting/Settings') },
  ]
});

export default router;
