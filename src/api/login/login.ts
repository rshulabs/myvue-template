import request from '@/utils/axios' // axios的初始化（请求+响应拦截器）

// 登录接口的返回值类型
interface IResponseType {
	code: number
	status: number
	msg?: string
	data: ILogin
}
interface ILogin {
	token: string
	expires: number
}
// 登录
export const login = (username: string, password: string) => {
	return request<IResponseType>({
		url: '/api/auth/login',
		method: 'post',
		data: {
			username,
			password,
		},
	})
}
