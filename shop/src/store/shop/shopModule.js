import { Toast } from 'mint-ui'
const state={
	shop:[]
}
const mutations={
	pushId(state,j){
	  if(state.shop.length<1){
	  		state.shop.push(j)
	  		Toast({
						message: '成功加入购物车',
						iconClass: 'icon icon-success'
					});
	  }else{
	  		if(state.shop.includes(j)){
	  			Toast({
						message: '购物车已有该商品',
						iconClass: 'icon icon-success'
					});
	  		}else{
	  			Toast({
						message: '成功加入购物车',
						iconClass: 'icon icon-success'
					});
	  			state.shop.push(j)
	  		}
	  }
	  	console.log(state.shop)
	},
	change(state,i){
		state.shop=[]
		state.shop=i
	}
}
var shopModule={
	state,
	mutations
}
export default shopModule;
