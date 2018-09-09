<template>
	<div class="content-tab disflex">
		<router-link  :to="{name:'orderAll'}" class=" pdtb30 disflex flex-one justifyCenter font14 col-dgray" active-class="order-Active" :id="1">全部订单</router-link>
		<router-link :to="{name:'waitPay'}" class=" pdtb30 disflex flex-one justifyCenter font14 col-dgray" active-class="order-Active" :id="2">待付款</router-link>
		<router-link :to="{name:'waitDelivery'}" class=" pdtb30 disflex flex-one justifyCenter font14 col-dgray" active-class="order-Active" :id="3">待发货</router-link>
		<router-link :to="{name:'waitTake'}" class=" pdtb30 disflex flex-one justifyCenter font14 col-dgray " active-class="order-Active" :id="4">待收货</router-link>
		<router-link :to="{name:'waitAssess'}" class=" pdtb30 disflex flex-one justifyCenter font14 col-dgray" active-class="order-Active" :id="5">待评价</router-link>
	</div>
</template>
<script>
	export default {
	
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

		}
	}
</script>

<style scoped="scoped">

</style>