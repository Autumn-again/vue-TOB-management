import { createRouter, createWebHashHistory} from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/home',
            name: '/home',
            component: ()=> import('../view/home.vue'),
            meta: {
                title: '登录页'
            }
        }
    ]
})

export default router