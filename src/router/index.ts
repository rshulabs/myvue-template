import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
const modules: Record<string, any> = import.meta.glob(['./modules/*.ts'], {
	eager: true, // 要开启这个
})
const routes: Array<RouteRecordRaw> = []
Object.keys(modules).forEach((key) => {
	routes.push(modules[key].default)
})
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
router.beforeEach(async (_to, _from, next) => {
	next()
})
router.afterEach((_to) => {
	NProgress.done()
})
export default router
