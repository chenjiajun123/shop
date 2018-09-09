<template>
	<div class="productlist-three mgt30">
		<ul class="disflex justifyBetween flex-wrap mgb15">
			<li class="disflex  productList-li mgt30 column " v-for="(item,index,key) in showlist" :key="item.id" :index="index">
				<div class="productList-li-pic">
					<img :src="item.pic">
				</div>
				<h1 class="col-sgray font14 mgt15">{{item.title}}</h1>
				<div class="relative disflex alignCenter mgt15 justifyBetween"><span class="font12 col-sred ">￥{{item.number}}</span>
					<router-link :to="{ path:'/productDetails:id', query:{ id:item.id,tabId:3}}" class="buy-once font14">立即购买</router-link>
				</div>
			</li>
		</ul>
		<a class="watch-more font16" @touchstart="showAll = !showAll" v-show="showlist.length>0">{{showAll?'收起':'更多'}}</a>
	</div>
</template>
<script>
	export default {

		data() {
			return {
				productListThree: [],
				showAll: false,
			}
		},
		created: function() {

		},
		mounted: function() {

		},
		methods: {

		},
		computed: {
			showlist: function() {
				if(this.showAll == false) {
					let showlist = [];
					if(this.productListThree.length > 4) {
						for(let i = 0; i < 4; i++) {
							showlist.push(this.productListThree[i])
						}

					} else {
						showlist = this.productListThree
					}
					return showlist
				} else {
					return this.productListThree
				}
				console.log(showlist)
			},
		},
		filters: {

		},
		beforeRouteEnter(to, from, next) {

			// 路由导航钩子，此时还不能获取组件实例 `this`，所以无法在data中定义变量（利用vm除外）
			// 参考 https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
			// 所以，利用路由元信息中的meta字段设置变量，方便在各个位置获取。这就是为什么在meta中定义isBack
			// 参考 https://router.vuejs.org/zh-cn/advanced/meta.html
			if(from.name == 'productDetails') {
				to.meta.isBack = true;
				//判断是从哪个路由过来的，
				//如果是page2过来的，表明当前页面不需要刷新获取新数据，直接用之前缓存的数据即可
			}

			next();
		},
		activated() {
			if(!this.$route.meta.isBack) {
				// 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据

				this.$ajax.get('/productListThree').then((res) => {

					this.productListThree = res.data[0].productListThree

				}).catch((err) => {
					console.log(err)
				})
			}
			// 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
			this.$route.meta.isBack = false

		},
	}
</script>

<style scoped="scoped">

</style>