<template>
<div id="register" class="relative height-100">
	<v-head></v-head>
	<div class="pdtb20 disflex justifyCenter alignCenter bg-dblue register-title relative">
		<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-register.png" class="mgr10 icon-register-title">会员注册</h1>
		<a class="arrow-left" @touchstart="routerBack"><img src="../../assets/images/arrow-left.png"></a>
	</div>
	<div>
		<div class="register-content">
			<p class="username mgt39 col-dgray font14 disflex alignCenter justifyCenter"><span class="span font14">用户名:</span><input type="text" v-model="user.username" class="input-text mgl15 font12"></p>
			<p class="email mgt39 col-dgray font14 disflex alignCenter justifyCenter "><span class="span font14">邮箱:</span><input type="text" v-model="user.email" class="input-text mgl15 font12"></p>
			<p class="phone mgt39 col-dgray font14 disflex alignCenter justifyCenter "><span class="span font14">手机号码:</span><input type="text" v-model="user.phone" class="input-text mgl15 font12"></p>
			<p class="pasword mgt39 col-dgray font14 disflex alignCenter justifyCenter "><span class="span font14">密码:</span><input type="password" v-model="user.pasword" class="input-text mgl15 font12"></p>
			<p class="pasword-check mgt39 col-dgray font14 disflex alignCenter justifyCenter "><span class="span font14">确认密码:</span><input type="password" v-model="user.paswordCheck" class="input-text mgl15 font12"></p>
			<div class="yanzhen mgt39 col-dgray font14 disflex alignCenter justifyCenter ">
				<span class="span font14">验证码:</span>
				<p class="input-text mgl15 border-none"><input type="text" v-model="user.yanzhen" class="input-yanzhen font12">
					<img src="../../assets/images/yanzhen_index.png" class="yanzhen-img">
				</p>
			</div>

			<p class="disflex justifyCenter">
				<a class="disflex alignCenter register-button mgl60 font18" @touchstart="pushInfo(user);register()">立即注册</a>
			</p>
			<p class="disflex alignCenter justifyCenter mgt15 mgb40"><span class="font12 col-dgray mgl60">已有账号，</span>
				<router-link to="/login" class="font12 col-dblue">立即登录>></router-link>
			</p>
		</div>
	</div>
	<v-footer></v-footer>
</div>
</template>
<script>
	import head from '../common/header/head.vue'
	import footer from '../common/footer/footer.vue'
	import { mapMutations } from 'vuex'
	import { Toast } from 'mint-ui'
	export default {
		components: {
			"v-head": head,
			"v-footer": footer
		},
		data() {
			return {
				user: {
					username: '',
					email: '',
					phone: '',
					pasword: '',
					paswordCheck: '',
					yanzhen: '',
					login: 0
				}
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
			...mapMutations([
				'pushInfo' // 映射 this.increment() 为 this.$store.commit('increment')
			]),
			register() {
				if(!this.validate.Regusername(this.user.username)) {
					Toast({
						message: '用户名不少于两个字',
						iconClass: 'icon icon-success'
					});
					return ''
				} else if(!this.validate.Regemail(this.user.email)) {
					Toast({
						message: '请输入正确的邮箱',
						iconClass: 'icon icon-success'
					});
					return ''
				} else if(!this.validate.RegTelPhone(this.user.phone)) {
					Toast({
						message: '请输入正确的手机号码',
						iconClass: 'icon icon-success'
					});
					return ''
				}
								else if(!this.validate.Regmima(this.user.pasword)) {
									Toast({
										message: "密码至少包含大写字母，小写字母，数字，且不少于8位",
										iconClass: 'icon icon-success'
									});
									return ''
								} 
								else if(this.user.paswordCheck!=this.user.pasword) {
									Toast({
										message: '请确认两次输入密码一致',
										iconClass: 'icon icon-success'
									});
									return ''
								} 
				else {
					Toast({
						message: '注册成功',
						iconClass: 'icon icon-success'
					});
					this.$router.push({
					name:'login',
					})
				}
			}
		},
		computed: {

		},
		filters: {

		}
	}
</script>

<style scoped="scoped">

</style>