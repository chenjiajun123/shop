//支付成功模块
const state = {
	paySuccess:[]
}
const mutations = {
	paySuccess(state, p) {
		state.paySuccess.push(p)
	},
}
var paySuccessModule = {
	state,
	mutations
}
export default paySuccessModule;