<template>
	<div id="order">
		<v-head></v-head>
		<!--订单标题部分-->
		<div class="pdtb20 disflex justifyCenter alignCenter bg-dblue order-title relative">
			<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-order.png" class="mgr10 icon-order-title">收货地址</h1>
			<a class="arrow-left" @touchstart="routerBack"><img src="../../assets/images/arrow-left.png"></a>
		</div>
		<!--订单tab选项卡部分-->
		<v-tab></v-tab>
		<!--订单内容部分-->
		<div class="order-content">
			<keep-alive>
				<!--订单列表部分-->
				<router-view></router-view>
			</keep-alive>
		</div>
		<v-footer></v-footer>
	</div>
</template>
<script>
	import head from '../common/header/head.vue'
	import footer from '../common/footer/footer.vue'
	import tab from './tab/tab.vue'
	export default {
		components: {
			"v-head": head,
			"v-footer": footer,
			"v-tab": tab,
		},
		data() {
			return {

			}
		},
		created: function() {

		},
		mounted: function() {

		},
		methods: {
			routerBack() {
				this.$router.go(-1);
			},
		},
		computed: {

		},
		filters: {

		}
	}
</script>

<style scoped="scoped">

</style>