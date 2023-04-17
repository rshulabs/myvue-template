import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

const service = axios.create()

// axios的请求拦截器
service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// 请求前需要处理的事情
		return config
	},
	(error: any) => {
		// 需要处理的事情
		Promise.reject(error)
	},
)

// axios的响应拦截器
service.interceptors.response.use(
	async (response: AxiosResponse) => {
		// 把数据返回给前端前需要处理的事情
	},
	(error: any) => {
		// 需要处理的事情
		return Promise.reject(error)
	},
)

export default service
