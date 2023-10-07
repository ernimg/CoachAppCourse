import { createRouter, createWebHistory } from "vue-router";
import CoachesList from './Pages/CoachesList.vue'
import CoachDetails from './Pages/CoachDetails.vue'
import ContactCoach from './Pages/ContactCoach.vue'
import CoachRegistration from './Pages/CoachRegistration.vue'
import RequestRecived from './Pages/RequestRecived.vue'
import UserAuth from './Pages/Auth/UserAuth.vue'
import ErrRoute from './Pages/ErrRoute.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachDetails, props: true, children: [
                { path: 'contact', component: ContactCoach }
            ]
        },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestRecived },
        { path: '/auth', component: UserAuth },
        { path: '/:notFound(.*)', component: ErrRoute }
    ]
});

export default router;