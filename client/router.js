import { createWebHistory, createRouter } from "vue-router";
import Home from './views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./views/About.vue'),
        children: [
            {
                path: 'sample',
                component: () => import('./views/Sample.vue')
            }
        ]
    },
    {
        path: '/profile/:username',
        name: 'Profile',
        component: () => import('./views/Profile.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;