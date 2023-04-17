import { RouteRecordRaw } from 'vue-router'
export default {
	path: '/vueUse',
	name: 'vueUse',
	meta: {
		title: '测试vueUse库',
		keepAlive: true,
		requireAuth: true,
	},
	component: () => import('@/view/vueUse.vue'),
} as RouteRecordRaw
