<template>
<div id="confirm-order">
	<v-head></v-head>
	<!--确认订单标题部分-->
	<div class="pdtb20 disflex justifyCenter alignCenter bg-dblue shop-car-title relative">
		<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-confirm.png" class="mgr10 icon-confirm-title ">确认订单</h1>
		<a class="arrow-left" @touchstart="routerBack"><img src="../../assets/images/arrow-left.png"></a>
	</div>
	<!--确认订单选择地址部分-->
	<div class="select-address mgtb30 pdlr20">
		<router-link to="/selectAddress" class="address-title-button font16 col-dblue">选择收货地址</router-link>
		<div class="address-content pdlr15 pdtb10 mgt15 relative" :class="[isSelect ? 'border-dblue-all' : 'border-sgray-all']" @click="Select()" v-if="this.$store.state.addressModule.address.length>0">
			<p class="font14 col-dgray"><span class="mgr20">{{item.dizhi}}</span><span>({{item.name}}收）</span></p>
			<p class="font14 col-dgray"><span class="mgr20">{{item.dizhiDetails}}</span> <span>{{item.telphone}}</span></p>
			<a class="angale" v-show="isSelect"></a>
		</div>
		<div class="address-bottom-button disflex alignCenter justifyBetween mgt15">
			<router-link to="/address" class="border-sgray-all font14 col-dgray pdtb10 pdlr15">添加新地址</router-link>
			<router-link to="/address" class="font12 col-dblue">管理收货地址</router-link>
		</div>
	</div>
	<!--确认订单商品信息部分-->
	<div class="confirm-info pdlr20">
		<p class="address-title-button font16 col-dblue border-sgray pdb10">确认订单信息</p>
		<div class="pdtb30 border-sgray">
			<div class="info disflex relative mgt10" v-for="(list,index,key) in info" :index="index" :key="index">
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
		</div>
		<p class="font14 col-dgray disflex alignCenter justifyBetween pdtb20 border-sgray"><span>快递运费</span><span>￥0.00</span></p>
		<p class="font14 col-dgray disflex alignCenter justifyBetween pdtb20 border-sgray"><span>合计</span><span class="col-mred">￥{{all}}.00</span></p>
		<div class="clear mgtb30">
			<a class="confirm-button font16 bg-red disflex alignCenter justifyCenter mgt20 clear" @touchstart="Topay">提交订单</a>
		</div>
	</div>
	<v-footer></v-footer>
</div>
</template>
<script>
	import head from '../common/header/head.vue'
	import footer from '../common/footer/footer.vue'
	import { Toast } from 'mint-ui'
	export default {
		components: {
			"v-head": head,
			"v-footer": footer
		},
		data() {
			return {
				info: [],
				all: 0,
				isSelect: false,
				item: {}
			}
		},
		created: function() {
			this.info = this.$store.state.checkAllModule.checkAll[0].check
			this.all = this.$store.state.checkAllModule.checkAll[0].money
		},
		mounted: function() {
			this.item = this.$store.state.addressModule.address[0]
		},
		methods: {
			routerBack() {
				this.$router.go(-1);
			},
			Select() {
				this.isSelect = !this.isSelect
			},
			Topay() {
				if(this.item === undefined) {
					Toast({
						message: '请先添加地址',
						iconClass: 'icon icon-success'
					});
				} else {
					this.$router.push({
						name: 'pay',
						params: {
							payinfo: this.item,
							paymoney: this.all,
							pay: this.info
						}
					})
				}
			},
			//提交订单去往支付叶念
		},
		computed: {

		},
		filters: {

		}
	}
</script>

<style scoped="scoped">

</style>