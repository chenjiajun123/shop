const state = {
	address: []
}
const mutations = {
	pushaddress(state, h) {
		state.address.push(h)
	},
	Select(state, q) {
		let temp = state.address[0]
		state.address[0] = state.address[q]
		state.address[q] = temp
	},
	revise(state,payload){
		state.address[payload.index]=payload.list
	}
}
var addressModule = {
	state,
	mutations
}
export default addressModule;