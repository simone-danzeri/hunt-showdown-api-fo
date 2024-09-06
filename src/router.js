import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppMaps from  './pages/AppMaps.vue';
const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/maps',
            name: 'maps',
            component: AppMaps,
        },
    ]
});

export { router };