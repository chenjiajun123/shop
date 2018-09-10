<template>
	<div id="head" class="bg-bai disflex pdlr20 pdtb10 alignCenter justifyBetween">
		<!--头部左部logo部分-->
		<div class="left-logo">
			<router-link to="/index"><img src="../../../assets/images/header-logo.png"></router-link>
		</div>
		<!--头部右部icon部分-->
		<div class="right-icon">
			<ul class="disflex">
				<li class="mgr20">
					<router-link to="/index"><img src="../../../assets/images/icon-header-four.png" class="icon-find-header"></router-link>
				</li>
				<li class="mgr20">
					<router-link :to="{name:'shopCar'}"><img src="../../../assets/images/icon-header-three.png" class="icon-shop-header"></router-link>
				</li>
				<li class="mgr20">
					<router-link :to="{name:'user'}"><img src="../../../assets/images/icon-header-two.png" class="icon-person-header"></router-link>
				</li>
				<li>
					<a @touchstart.prevent="slidenav"><img src="../../../assets/images/icon-header-one.png" class="icon-tab-header"></a>
				</li>
			</ul>
		</div>
		<div class="slide-nav  absolute" style="right: 0;height: 100%;width:100%;background:rgba(0,0,0,.5);z-index:2;bottom:0;" v-show="navShow" @touchstart="navshow">
		</div>
		<!--右侧菜单栏弹出-->
		<transition name="slide-fade">
			<div class="menu absolute" style="width:4rem;height: 100%;background:linear-gradient(rgba(50,60,60, 1), rgba(50,60,60, 1));z-index:9999;right:0;top:0;" v-show="navShow">
				<div class="disflex relative" style="height:100%;">
					<ul class="disflex column alignCenter justifyCenter width-all" style="height: 100%;">
						<li class=" pdtb30 width-all disflex justifyCenter">
							<router-link to="/index" class="font14 col-bai ">首页</router-link>
						</li>
						<li class=" pdtb30 width-all disflex justifyCenter">
							<router-link to="/product" class="font14 col-bai">产品中心</router-link>
						</li>
						<li class=" pdtb30 width-all disflex justifyCenter">
							<router-link to="/news" class="font14 col-bai">新闻中心</router-link>
						</li>
						<li class=" pdtb30 width-all disflex justifyCenter">
							<router-link to="/shopCar" class="font14 col-bai">购物车</router-link>
						</li>
						<li class=" pdtb30 width-all disflex justifyCenter">
							<router-link to="/user" class="font14 col-bai">个人中心</router-link>
						</li>
						<li class=" pdtb30 width-all disflex justifyCenter">
							<router-link to="/order" class="font14 col-bai">我的订单</router-link>
						</li>
						<li class=" pdtb30 width-all disflex justifyCenter">
							<router-link to="/register" class="font14 col-bai">注册账号</router-link>
						</li>
						<li class=" pdtb30 width-all disflex justifyCenter">
							<router-link to="/address" class="font14 col-bai">我的地址</router-link>
						</li>
						<li class=" pdtb30 width-all disflex justifyCenter">
							<router-link to="/aboutUs" class="font14 col-bai">关于我们</router-link>
						</li>
					</ul>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
	import { Popup } from 'mint-ui';
	export default {
		components: {
			Popup
		},
		data() {
			return {
				navShow: false,

			}
		},
		created: function() {

		},
		mounted: function() {

		},
		methods: {
			slidenav() {
				this.navShow = !this.navShow
			},
			navshow() {

				this.navShow = !this.navShow
			}
			//菜单栏遮罩控制
		},
		computed: {

		},
		filters: {

		}
	}
</script>

<style scoped="scoped">

</style>