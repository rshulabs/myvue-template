// 解决ts的报错：...类型“ComponentInternalInstance | null”
// 1. 可以添加ts忽略去解决
// // @ts-ignoreconst { proxy } = getCurrentInstance();
// 但是这个方法很无脑，也麻烦
// 2. 考虑到在获取上下文和全局挂载实例的时候会用到这个getCurrentInstance，通过单独写一个ts文件来实现
import { ComponentInternalInstance, getCurrentInstance } from 'vue'

export default function useCurrentInstance() {
	const { appContext } = getCurrentInstance() as ComponentInternalInstance
	const globalProperties = appContext.config.globalProperties
	return {
		globalProperties,
	}
}
