import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ReposView from '../views/reposView.vue';
import RepoItem from '../views/repoItem.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeView,
        },

        {
            path:'/repos',
            name:'repos',
            component:ReposView,
        },

        //redirect to home
        {
            path:'/:pathMatch(.*)*',
            redirect:'/',
        },
        {
            path:'/repos/:username',
            name:'repoItem',
            component:RepoItem,
            props:true,
        },
        // 404 page
        {
            path:'/:catchAll(.*)',
            name:'notFound',
            component:NotFound,
        }

    ]
})


export default router;