<template>
	<div id="login">
		<v-head></v-head>
		<!--登录标题部分-->
		<div class="pdtb20 disflex justifyCenter alignCenter bg-dblue login-title relative">
			<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-login.png" class="mgr10 icon-login-title">会员登录</h1>
			<a class="arrow-left" @touchstart="routerBack"><img src="../../assets/images/arrow-left.png"></a>
		</div>
		<!--登录内容表单部分-->
		<div class="login-content">
			<p class="username mgt39 col-dgray font14 disflex alignCenter justifyCenter"><span class="span font14">用户名:</span><input type="text" v-model="username" class="input-text mgl15 font12"></p>
			<p class="pasword mgt39 col-dgray font14 disflex alignCenter justifyCenter "><span class="span font14">密码:</span><input type="password" v-model="pasword" class="input-text mgl15 font12"></p>
			<p class="pasword mgt15 col-dblue disflex font12 justifyCenter"><span class="span"></span><span class="float-r input-text border-none text_r font12 mgl15" style="display: block;">忘记密码?</span></p>
			<p class="disflex justifyCenter">
				<a class="font18 login-button mgl60" @touchstart="jiaoyan">立即登录</a>
			</p>
			<p class="disflex alignCenter justifyCenter mgt15 mgb40"><span class="font12 col-dgray mgl60">未有账号，</span>
				<router-link to="/register" class="font12 col-dblue">免费注册>></router-link>
			</p>
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
				username: '',
				//登录的用户名
				pasword: '',
				//登录密码
				Login: 1
				//登录状态
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
			//arrow返回事件
			jiaoyan() {
				if(this.username == '' && this.pasword == '') {
					Toast({
						message: '请输入用户名和密码',
						iconClass: 'icon icon-success'
					});
				} else {
					this.$store.state.registerModule.register.forEach(item => {
						if(this.username == item.username) {

							this.$store.commit('pushlog', {
								name: this.username,
								passWord: this.pasword,
							})

							this.$router.push({
								path: this.$route.query.redirect || '/index',
								query: {

								}
							})
						} else {
							Toast({
								message: '登录失败,请填写正确的用户名和密码',
								iconClass: 'icon icon-success'
							});
						}
					})
				}
			},
			//校验登录
		},
		computed: {

		},
		filters: {

		}
	}
</script>

<style scoped="scoped">

</style>