//登录模块
const state = {
	login: [{
		Login:0
	}
]
}
const mutations = {
	pushlog(state, j) {
		state.login = [{Login:1}]
		state.login.push(j)
	},
}
var loginModule = {
	state,
	mutations
}
export default loginModule;