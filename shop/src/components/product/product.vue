<template>
	<div id="product">
		<v-head></v-head>
		<!--产品标题部分-->
		<div class="pdtb20 disflex justifyCenter alignCenter bg-dblue product-title">
			<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-product-one.png" class="mgr10 icon-product-title">产品中心</h1>
		</div>
		<!--产品内容部分-->
		<div class="product-content pdtb40 pdlr20">
			<div class="content-main">
				<v-tab></v-tab>
				<keep-alive>
					<!--产品列表部分-->
					<router-view style="min-height:13rem;"></router-view>
				</keep-alive>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>
<script>
	import tab from './tab/tab.vue'
	import head from '../common/header/head.vue'
	import footer from '../common/footer/footer.vue'
	export default {
		components: {
			"v-tab": tab,
			"v-head": head,
			"v-footer": footer
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

		},
		computed: {

		},
		filters: {

		},

	}
</script>

<style scoped="scoped">

</style>