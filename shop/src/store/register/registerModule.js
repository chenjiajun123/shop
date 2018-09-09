//注册模块
const state={
	register:[]	
}
const mutations={
	pushInfo(state,n){
		state.register.push(n)
	},
}
var registerModule={
	state,
	mutations
}
export default registerModule;
