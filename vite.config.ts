import { defineConfig, loadEnv } from 'vite' // 用来做vite的语法提示的
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

const envResolver = {
	// 生产环境合并
	build: () => {
		return { ...viteBaseConfig, ...viteProdConfig } // 写法一
		// return Object.assign({}, viteBaseConfig, viteProdConfig); // 写法二
	},
	// 开发环境合并
	serve: () => {
		console.log('开发环境')
		return Object.assign({}, viteBaseConfig, viteDevConfig)
	},
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '')
	console.log('env===>', env.MYPROJECT_BASE_URL)
	return envResolver[command]()
})
