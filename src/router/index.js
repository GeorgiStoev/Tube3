import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/home/Home.vue')
        },
        {
            path: '/signin',
            name: 'SignIn',
            component: () => import('../components/auth/SignIn.vue'),
             meta: {
                 requiresGuest: true
             }
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: () => import('../components/auth/SignUp.vue'),
             meta: {
                 requiresGuest: true
             }
        },
        {
            path: '/video-watch/:videoId',
            name: 'Video-Watch',
            component: () => import('../components/videos/video-watch/Video-Watch.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/video-create',
            name: 'Video-Create',
            component: () => import('../components/videos/video-create/Video-Create.vue'),
             meta: {
                requiresAuth: true
            }
        },
        {
            path: '/video-favourites',
            name: 'Video-Favourites',
            component: () => import('../components/videos/video-favourites/Video-Favourites.vue'),
             meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(!firebase.auth().currentUser) {
            next({
                path: '/signin',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            next();
        }
    } else if(to.matched.some(record => record.meta.requiresGuest)) {
        if(to.matched.some(record => record.meta.requiresGuest)) {
            if(firebase.auth().currentUser) {
                next({
                    path: '/',
                    query: {
                        redirect: to.fullPath
                    }
                });
            } else {
                next();
            }
        }
    } else {
        next();
    }
});

export default router;