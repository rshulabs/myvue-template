import { defineConfig } from 'vite' // 用来做vite的语法提示的

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 8080, //启动端口
		hmr: {
			host: 'localhost',
			port: 8080,
		},
		// 设置 https 代理
		proxy: {
			'/api': {
				target: '要代理的 http 地址',
				changeOrigin: true,
				rewrite: (path: string) => path.replace(/^\/api/, ''),
			},
		},
	},
})
