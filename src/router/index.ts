import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabels from '@/views/EditLabels.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    // 默认路径，一般写在最上面
    {
        path: '/',
        redirect: '/money' // 重定向到 /money，即默认路径跳转到 money
    },
    {
        path: '/money', // 不用写 # 号
        component: Money
    },
    {
        path: '/labels',
        component: Labels
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path: '*', // * 即除了上面的路径之外的所有
        component: NotFound
    },
    {
        path: '/labels/edit',
        component: EditLabels
    }
];

const router = new VueRouter({
    routes
});

export default router;
