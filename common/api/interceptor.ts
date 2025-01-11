
import { useLoginStatusStore } from "@/store/login"
import { doLogout } from "@/store/login"

/*
   保存token
*/
export const tokenResponseInterceptor = (response) => {
	let loginStore = useLoginStatusStore();
	if (response.headers.authorization) {
		loginStore.token = response.headers.authorization
	}
	return response;
}

export const tokenRequestInterceptor = (request) => {
	let loginStore = useLoginStatusStore();

	if (!request.data) {
		request.data = { placeholder: 1 }
	}

	if (loginStore.token) {
		request.headers.authorization = `Bearer ${loginStore.token}`;
	}
	return request
}


export const defaultResponseInterceptors = (response) => {

	if (response?.data?.code === 400) {
		alert(response.data.message)
		return Promise.reject()
	}

	// 无权限
	if (response?.data?.code === 401) {
		let loginStore = useLoginStatusStore()
		loginStore.logout()
		uni.reLaunch({
			url: '/pages/login/login'
		})
		uni.showToast({
			icon: null,
			title: '请重新登录',
		})
		return Promise.reject()
	}

	if (response.data.code == 0) {
		return response
	}

	alert(response?.data?.message)
	throw new Error(response)
}