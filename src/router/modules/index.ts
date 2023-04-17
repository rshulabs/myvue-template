import { RouteRecordRaw } from 'vue-router'
export default {
	path: '/',
	name: 'Index',
	meta: {
		title: '首页',
		keepAlive: true,
		requireAuth: true,
	},
	component: () => import('@/view/myIndex.vue'),
} as RouteRecordRaw
