<template>
	<div id="user">
		<v-head></v-head>
		<!--个人中心标题部分-->
		<div class="pdtb20 disflex justifyCenter alignCenter bg-dblue user-title relative">
			<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-user-one.png" class="mgr10 icon-user-title">会员中心</h1>
			<a class="arrow-left" @touchstart="routerBack"><img src="../../assets/images/arrow-left.png"></a>
		</div>
		<!--个人中心内容部分-->
		<div class="user-content">
			<div class="sub pdb20 pdt60 bg-sbai pdlr20">
				<div class="userinfo disflex alignCenter">
					<div class="left-info">
						<img src="../../assets/images/manhead-user.png" class="manhead">
					</div>
					<div class="disflex column justifyCenter right-info mgl15">
						<p class="font18 col-dgray">{{list.name}}</p>
						<p class="font12 col-dgray"><span>普通会员</span><span class="mgl30">用户ID：81504588</span></p>
						<p class="font12 col-dgray">账户安全：中</p>

					</div>
				</div>
				<div class="sub-btn mgt55 disfelx justifyCenter">
					<ul class="disflex justifyAround">
						<li class="font20 col-dgray disfelx alignCenter"><img src="../../assets/images/icon-user-two.png" class="concern"><span class="mgl15">关注</span></li>
						<li class="font20 col-dgray disfelx alignCenter"><img src="../../assets/images/icon-user-three.png" class="collect"><span class="mgl15">收藏</span></li>
						<li class="font20 col-dgray disfelx alignCenter"><img src="../../assets/images/icon-user-five.png" class="rest-money"><span class="mgl15">余额</span></li>
					</ul>
				</div>
			</div>
			<div class="mid">
				<div class="mid-title pdtb30 border-sgray mglr20">
					<p class="disflex justifyBetween alignCenter "><span class="font20 col-dgray">我的订单</span>
						<router-link to="/order" class="col-ssgray font16">查看全部订单>></router-link>
					</p>
				</div>
				<div class="mid-btn pdlr20 pdtb40">
					<div class="disflex">
						<router-link to="/order" class="flex-one disflex column justifyCenter alignCenter"><img src="../../assets/images/icon-user-six.png" class="icon-pay"><span class="font16 col-dgray mgt15">代付款</span></router-link>
						<router-link to="/order" class="flex-one disflex column justifyCenter alignCenter"><img src="../../assets/images/icon-user-seven.png" class="icon-delivery"><span class="font16 col-dgray mgt15">待发货</span></router-link>
						<router-link to="/order" class="flex-one disflex column justifyCenter alignCenter"><img src="../../assets/images/icon-user-eight.png" class="icon-take-delivery"><span class="font16 col-dgray mgt15">待收货</span></router-link>
						<router-link to="/order" class="flex-one disflex column justifyCenter alignCenter"><img src="../../assets/images/icon-user-nine.png" class="icon-assess"><span class="font16 col-dgray mgt15">待评价</span></router-link>
						<router-link to="/order" class="flex-one disflex column justifyCenter alignCenter"><img src="../../assets/images/icon-user-ten.png" class="icon-return"><span class="font16 col-dgray mgt15">退换货</span></router-link>
					</div>
				</div>
			</div>
			<div class="bot bg-sgray disfelx">
				<ul class="disflex width-all flex-wrap">
					<li class="disflex pdtb20 mglr20 border-sgray justifyBetween width-all alignCenter">
						<p class="disflex alignCenter"><img src="../../assets/images/icon-user.png" class="icon-user"><span class="mgl15 col-dgray font20">个人中心</span></p>
						<a><img src="../../assets/images/arrow-right.png" class="arrow-right"></a>
					</li>
					<li class="disflex pdtb20 mglr20 border-sgray justifyBetween width-all alignCenter">
						<p class="disflex alignCenter"><img src="../../assets/images/icon-user.png" class="icon-user"><span class="mgl15 col-dgray font20">账户中心</span></p>
						<a><img src="../../assets/images/arrow-right.png" class="arrow-right"></a>
					</li>
					<li class="disflex pdtb20 mglr20 border-sgray justifyBetween width-all alignCenter">
						<p class="disflex alignCenter"><img src="../../assets/images/icon-user.png" class="icon-user"><span class="mgl15 col-dgray font20">售后服务</span></p>
						<a><img src="../../assets/images/arrow-right.png" class="arrow-right"></a>
					</li>
				</ul>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>
<script>
	import head from '../common/header/head.vue'
	import footer from '../common/footer/footer.vue'

	export default {
		components: {
			"v-head": head,
			"v-footer": footer
		},
		data() {
			return {
				list: {}
			}
		},
		created: function() {

		},
		mounted: function() {
			this.list = this.$store.state.loginModule.login[1]

		},
		methods: {
			routerBack() {
				this.$router.go(-1);
			},
			//arrow事件
		},
		computed: {

		},
		filters: {}
	}
</script>

<style scoped="scoped">

</style>