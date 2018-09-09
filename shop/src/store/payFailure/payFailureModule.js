//支付失败模块
const state = {
	payFailure:[]
}
const mutations = {
	payFailure(state, k) {
		state.payFailure.push(k)
	},
}
var payFailureModule = {
	state,
	mutations
}
export default payFailureModule;