// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
Vue.config.devtools = true
import App from './App'
import router from './router'
import './assets/css/less/main.less'
import './assets/css/mint.css'
import './assets/css/newSwiper.css'
Vue.config.productionTip = false;
import VueSwiper from 'vue-awesome-swiper'
import 'lib-flexible/flexible.js'
import validate from './validate/validate.js'
Vue.prototype.validate = validate
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueSwiper)
import Axios from 'axios';
Vue.prototype.$ajax = Axios; // 可以使用this.$ajax
Vue.use(Mint);
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'; 
import Vuex from 'vuex';
Vue.use(Vuex);
import store from './store/store.js'

//请求拦截器
Axios.interceptors.request.use((config) => {
	Mint.Indicator.open({ //打开loading

		spinnerType: 'fading-circle'
	});
	return config;
}, (err) => {
	return Promise.reject(err)

})

//响应拦截器
Axios.interceptors.response.use((response) => {
	Mint.Indicator.close(); //关闭loading
	return response;
}, (err) => {
	return Promise.reject(err);

})
require('./mock.js')

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
router.beforeEach((to, from, next) => {

	//to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子

	if(to.path === '/login') {
		next()
	} else if(to.path === '/register') {
		next()
	}
	// 如果即将进入登录路由，则直接放行
	else { //进入的不是登录路由
		if(to.meta.requiresAuth && store.state.loginModule.login==[]){
			next({
					path: '/login',
					query: {
						redirect: to.fullPath
					}, // 如果你使用钩子函数，your path 可以替换成to.fullPath
				})
		}
			else{
				if(to.meta.requiresAuth && store.state.loginModule.login[0].Login!= 1) {
				next({
					path: '/login',
					query: {
						redirect: to.fullPath
					}, // 如果你使用钩子函数，your path 可以替换成to.fullPath
				})
			} else {
				next({

				})

			}
			}
		}
		//下一跳路由需要登录验证，并且还未登录，则路由定向到  登录路由
	//如果不需要登录验证，或者已经登录成功，则直接放行

})