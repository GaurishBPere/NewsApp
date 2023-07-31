import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue'
import Home from '../views/Home.vue'
import NewsList from '../views/NewsList.vue'
import NewsDetails from '../views/NewsDetails.vue'
import NewsByCategory from '../views/NewsByCategory.vue'
import NewsByName from '../views/NewsByName.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "/category/:category?",
                name: "byCategory",
                component: NewsByCategory,
            },
            {
                path: "/name/:name?",
                name: "byName",
                component: NewsByName,
            },
            {
                path: "/newsDetails/:id?",
                name: "newsDetails",
                component: NewsDetails,
            },
        ]

    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;