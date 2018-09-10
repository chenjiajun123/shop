<template>
	<div class="wait-take">
		<div class="wait-take-list" v-for="(list,index,key) in orderAll[0].paySuccess" :index="index" :key="index">
			<h1 class="font12 col-ssgray bg-msgray pdlr20 pdtb10 title">订单完成</h1>
			<div class="list-content disflex alignCenter mgtb30 pdlr20 relative">
				<div class="left-pic disflex">
					<img :src="list.lunbo[0].lunbo">
				</div>
				<div class="content mgl15 disflex column justifyAround">
					<h1 class="col-dgray font14"><b>{{list.name}}</b></h1>
					<span class="font14 col-ssgray">分类:{{list.Func}}</span>
					<span class="font14 col-ssgray">颜色:{{list.color}}</span>
					<span class="font14 col-mred">￥{{list.Number}}</span>
				</div>
				<span class="absolute absolute-count col-dgray">X{{list.count}}</span>
			</div>
			<p class="font12 col-ssgray bg-msgray disflex flex-end alignCenter pdtb10 pdlr20"><span>全国包邮</span><span>合计：</span><span class="col-mred">￥{{list.Number*list.count}}.00</span></p>
			<p class="disflex alignCenter flex-end pdtb20 pdlr20"><a class="disflex alignCenter col-dblue order-button justifyCenter font14 pdtb10">查看物流</a></p>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				orderAll:''
			}
		},
		created: function() {
			this.orderAll = this.$store.state.paySuccessModule.paySuccess
		},
		mounted: function() {

		},
		methods: {

		},
		computed: {

		},
		filters: {

		}
	}
</script>

<style scoped="scoped">

</style>