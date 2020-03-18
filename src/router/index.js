import Vue from 'vue';
import Router from 'vue-router';
import SignIn from '../components/auth/SignIn.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/home/Home.vue')
        },
        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn
        }
    ]
})