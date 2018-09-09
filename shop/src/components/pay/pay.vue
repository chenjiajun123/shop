<template>
	<div id="pay">
		<v-head></v-head>
		<div class="pdtb20 disflex justifyCenter alignCenter bg-dblue shop-car-title relative">
			<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-pay.png" class="mgr10 icon-pay-title">在线支付</h1>
			<a class="arrow-left" @touchstart="routerBack"><img src="../../assets/images/arrow-left.png"></a>
		</div>
		<div class="pay-content pdlr20 pdt60 pdb20">
			<div class="sub">
				<h1 class="sub-title font16 col-dblue">订单已生成，请付款</h1>
				<div class="sub-content pdlr20 pdtb20 border-sgray-all mgt20">
					<p class="disflex alignCenter"><span class="font14 col-dgray sub-content-span">应付金额:</span><span class="font16 col-mred">￥{{paymoney}}.00</span></p>
					<p class="disflex alignCenter"><span class="font14 col-dgray sub-content-span">收货信息:</span><span class="font14 col-dgray">{{payinfo.name}}</span></p>
					<p class="disflex alignCenter"><span class="font14 col-dgray sub-content-span"></span><span class="font14 col-dgray">{{payinfo.dizhi}}</span><span class="font14 col-dgray">{{payinfo.dizhiDetails}}</span></p>
					<p class="disflex alignCenter"><span class="font14 col-dgray sub-content-span"></span><span class="font14 col-dgray">{{payinfo.telphone}}</span></p>
					<p class="disflex alignCenter"><span class="font14 col-dgray sub-content-span">送货时间:</span><span class="font14 col-dgray">工作日/周末/节假日均可</span></p>
				</div>
			</div>
			<div class="mid">
				<h1 class="mid-title font16 col-dblue mgt20">请输入支付密码</h1>
				<p class="disflex alignCenter mgt20"><input teye="text" class="border-sgray-all mgr10 pay-mima font12" v-model="paymima"><span class="font12 col-dblue">忘记密码？</span></p>
			</div>
			<div class="clear mgtb30">
				<a class="confirm-button font16 bg-red disflex alignCenter justifyCenter mgt20 clear" @touchstart.prevent="poPup">立即支付</a>
			</div>
		</div>
		<mt-popup popup-transition="popup-fade" style="width:80%;" v-model="popupVisible" v-if="paymima">
			<div class="title pdtb10 disflex alignCenter  pdlr20 bg-dblue flex-end">
				<a class="font12 col-bai disflex" @touchstart="cancel">X</a>
			</div>
			<div class="content bg-bai disflex alignCenter justifyCenter" style="height:3.6rem;">
				<div class="popup-left-pic disflex mgr40">
					<img src="../../assets/images/bingo-success.png">
				</div>
				<div class="popup-right-content ">
					<p class="font14 disflex "><span class="col-dgray">已成功付款</span><span class="col-mred">￥{{paymoney}}.00</span></p>
					<p class="mgt20 col-dblue font12 disflex justifyAround"><span @touchstart="goon">继续购物</span><router-link to="/order" class="col-dblue">查看订单</router-link></p>
					<p class="disflex justifyCenter">
						<a class="pay-confirm-button col-bai bg-dblue disflex justifyCenter alignCenter mgt20" @touchstart="confirm">确定</a>
					</p>
				</div>
			</div>
		</mt-popup>
		<mt-popup popup-transition="popup-fade" style="width:80%;" v-model="popupVisible" v-else>
			<div class="title pdtb10 disflex alignCenter  pdlr20 bg-dblue flex-end">
				<a class="font12 col-bai disflex" @touchstart="cancel">X</a>
			</div>
			<div class="content bg-bai disflex alignCenter justifyCenter" style="height:3.6rem;">
				<div class="popup-left-pic disflex mgr40">
					<img src="../../assets/images/icon-failure.png">
				</div>
				<div class="popup-right-content ">
					<p class="font14 disflex col-dgray">对不起，支付失败</p>
					<p class="mgt20 col-dblue font12 disflex justifyCenter">查看失败详情</p>
					<p class="disflex justifyCenter">
						<a class="pay-confirm-button col-bai bg-dblue disflex justifyCenter alignCenter mgt20" @touchstart="tryAgain">重试</a>
					</p>
				</div>
			</div>
		</mt-popup>
		<v-footer></v-footer>
	</div>
</template>
<script>
	import head from '../common/header/head.vue'
	import footer from '../common/footer/footer.vue'
	import { Popup } from 'mint-ui';
	import { Toast } from 'mint-ui'
	export default {
		components: {
			"v-head": head,
			"v-footer": footer,
			Popup
		},
		data() {
			return {
				popupVisible: false,
				paymima: '',
				payinfo: {},
				paymoney: ''
			}
		},
		created: function() {
			console.log(this.$route.params)
			this.payinfo = this.$route.params.payinfo
			this.paymoney = this.$route.params.paymoney
		},
		mounted: function() {

		},
		methods: {
			routerBack() {
				this.$router.go(-1);
			},
			poPup(popupVisible) {
				if(this.paymima != '') {

					this.$store.commit('paySuccess', {
						paySuccess: this.$route.params.pay,
						username: this.$route.params.payinfo.username
					})
					console.log(this.$store.state.paySuccessModule.paySuccess)
				} else {

					this.$store.commit('payFailure', {
						payFailure: this.$route.params.pay,
						username: this.$route.params.payinfo.username
					})
					console.log(this.$store.state.payFailureModule.payFailure)
				}
				this.popupVisible = !this.popupVisible;
			},
			cancel() {
				this.popupVisible = false

			},
			tryAgain() {
				this.popupVisible = false

			},
			confirm() {
			this.$router.push({
					name: 'order',
				})
			},
			goon() {
				this.popupVisible = false

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