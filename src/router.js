import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './Pages/CoachesList.vue';
import CoachDetails from './Pages/CoachDetails.vue';
import ContactCoach from './Pages/ContactCoach.vue';
import CoachRegistration from './Pages/CoachRegistration.vue';
import RequestRecived from './Pages/RequestRecived.vue';
import UserAuth from './Pages/Auth/UserAuth.vue';
import ErrRoute from './Pages/ErrRoute.vue';
import store from './Store/index.js';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      component: RequestRecived,
      meta: { requiresAuth: true },
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: ErrRoute },
  ],
});
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
