import { defineConfig } from 'vite' // 用来做vite的语法提示的
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// element plus的按需引入
// https://www.imooc.com/article/333530
// 这俩插件主要是用来 自动导入 api 和 components
import AutoImport from 'unplugin-auto-import/vite' // vue3中定义变量需要引入ref,reactive等等,比较麻烦，可以通过该给我们自动引入，在项目中直接使用即可
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// element plus的按需引入
import {
	createStyleImportPlugin,
	ElementPlusResolve,
} from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		//设置别名,用来快速指定文件
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	plugins: [
		vue(),
		//配置自动导入element
		createStyleImportPlugin({
			resolves: [ElementPlusResolve()],
			libs: [
				{
					libraryName: 'element-plus',
					esModule: true,
					resolveStyle: (name: string) => {
						return `element-plus/theme-chalk/${name}.css`
					},
				},
			],
		}),
		AutoImport({
			resolvers: [ElementPlusResolver()],
			imports: ['vue'], // 这个是生成src/auto-import.d.ts文件的
			dts: 'src/auto-import.d.ts', // 可以选择auto-import.d.ts 文件生成的位置，使用ts建议设置为'src/auto-import.d.ts'
		}),
		Components({
			resolvers: [ElementPlusResolver()],
			// 配置文件生成位置
			dts: 'src/components.d.ts',
		}),
	],
	envPrefix: 'MYPROJECT_',
})
