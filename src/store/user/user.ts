import { defineStore } from 'pinia'

const useUserStoreHook = defineStore({
	id: 'user', // id必填，且需要唯一
	state: () => ({
		nickname: '',
		username: '游客',
		id: 0,
		sex: 0,
		accesstoken: '',
	}),
	actions: {
		updateName(name: string) {
			this.username = name
		},
	},
	persist: {
		key: 'userinfo',
		storage: sessionStorage,
	},
})
export default function useUserStroe() {
	return useUserStoreHook()
}
