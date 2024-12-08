import {
	createStore
} from 'vuex';
const store = createStore({
	state() {
		return {
			user: {
				name: '',
				//用户名
				role: '',
				//职员
				pic: '',
				//图片id
				token: '',
				//验证

			},
			token: '', //token
			name: '', //全局姓名
			pic: '', //全局图片
			roleName: '', //全局角色
			err: '',
			errTime: 0,
			pagenum: 1,
			goods: {} //全局变量
		}

	}
})
export default store;