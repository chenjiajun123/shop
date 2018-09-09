const state={
	checkAll:[]
}
const mutations={
	pushCheck(state,o){
		state.checkAll=[]
		state.checkAll.push(o)
	},
	buyOnce(state,v){
	state.checkAll=[]
	state.checkAll.push(v)
	}
}
var checkAllModule={
	state,
	mutations
}
export default checkAllModule;
