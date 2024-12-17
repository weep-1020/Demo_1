import {createRouter,createWebHashHistory} from "vue-router"
import Login from "../views/login.vue"
const routes = [
    {
        path: '/login',
        component: Login
    },
];

// 注册路由表 告诉Vue-router 路由数组
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
});

// export  暴露出来 为import 做准备
export default router;
