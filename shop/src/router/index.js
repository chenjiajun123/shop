import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index.vue'
import head from '../components/common/header/head.vue'
import footer from '../components/common/footer/footer.vue'
import aboutUs from '../components/aboutUs/aboutUs.vue'
import news from '../components/news/news.vue'
import newslist from '../components/news/newslist/newslist.vue'
import newsDetails from '../components/newsDetails/newsDetails.vue'
import product from '../components/product/product.vue'
import listShed from '../components/product/productlist/listShed.vue'
import listWrinkle from '../components/product/productlist/listWrinkle.vue'
import listBotox from '../components/product/productlist/listBotox.vue'
import productDetails from '../components/productDetails/productDetails.vue'
import shopCar from '../components/shopCar/shopCar.vue'
import register from '../components/register/register.vue'
import login from '../components/login/login.vue'
import user from '../components/user/user.vue'
import confirm from '../components/confirm/confirm.vue'
import address from '../components/address/address.vue'
import selectAddress from '../components/selectAddress/selectAddress.vue'
import reviseAddress from '../components/reviseAddress/reviseAddress.vue'
import pay from '../components/pay/pay.vue'
import order from '../components/order/order.vue'
import orderAll from '../components/order/orderlist/orderAll.vue'
import waitPay from '../components/order/orderlist/waitPay.vue'
import waitDelivery from '../components/order/orderlist/waitDelivery.vue'
import waitTake from '../components/order/orderlist/waitTake.vue'
import waitAssess from '../components/order/orderlist/waitAssess.vue'
Vue.use(Router)
const router = new Router({
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
	mode: 'hash',
	scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition
      } else {
          return {
              x: 0,
              y: 0
          }
      }
  },
	routes: [
		{
			path: '/',
			name: '',
			redirect: '/index',
		},
		{
			path: '/head',
			name: 'head',
			component: head
		},

		{
			path: '/footer',
			name: 'footer',
			component: footer
		},
		{
			path: '/aboutUs',
			name: 'aboutUs',
			component: aboutUs,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/news',
			name: 'news',
			component: news,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/newslist',
			name: 'newslist',
			component: newslist,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/newsDetails:id',
			name: 'newsDetails',
			component: newsDetails,
			props: true,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/product',
			name: 'product',
			component: product,
			redirect: '/product/listShed',
			meta: {
				requiresAuth: true
			},
			children: [{
					path: 'listShed',
					name: 'listShed',
					component: listShed,
					meta: {
						keepAlive: true, //此组件需要被缓存
						isBack: false, //用于判断上一个页面是哪个
						requiresAuth: true
					},

				},
				{
					path: 'listWrinkle',
					name: 'listWrinkle',
					component: listWrinkle,
					meta: {
						keepAlive: true, //此组件需要被缓存
						isBack: false, //用于判断上一个页面是哪个
						requiresAuth: true
					},

				},
				{
					path: 'listBotox',
					name: 'listBotox',
					component: listBotox,
					meta: {
						keepAlive: true, //此组件需要被缓存
						isBack: false, //用于判断上一个页面是哪个
						requiresAuth: true
					},

				},
			]
		},
		{
			path: '/productDetails:id',
			name: 'productDetails',
			component: productDetails,
			meta: {
				keepAlive: false, //此组件不需要被缓存
				requiresAuth: true
			}
		},
		{
			path: '/shopCar',
			name: 'shopCar',
			component: shopCar,
			meta: {
				requiresAuth: true,

			}
		},
		{
			path: '/register',
			name: 'register',
			component: register,
		},
		{
			path: '/login',
			name: 'login',
			component: login,

		},
		{
			path: '/user',
			name: 'user',
			component: user,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/confirm',
			name: 'confirm',
			component: confirm,
			meta: {
				requiresAuth: true,
				isBack: false, //用于判断上一个页面是哪个
			}
		},
		{
			path: '/address',
			name: 'address',
			component: address,
			meta: {
				requiresAuth: true,
			}
		},
		{
			path: '/pay',
			name: 'pay',
			component: pay,
			meta: {
				requiresAuth: true,
			}
		},
		{
			path: '/order',
			name: 'order',
			component: order,
			redirect: '/order/orderAll',
			meta: {
				requiresAuth: true,
			},
			children: [{
					path: 'orderAll',
					name: 'orderAll',
					component: orderAll,
					meta: {
						keepAlive: true, //此组件需要被缓存
						isBack: false, //用于判断上一个页面是哪个
						requiresAuth: true
					},
				},
				{
					path: 'waitPay',
					name: 'waitPay',
					component: waitPay,
					meta: {
						keepAlive: true, //此组件需要被缓存
						isBack: false, //用于判断上一个页面是哪个
						requiresAuth: true
					},

				},
				{
					path: 'waitDelivery',
					name: 'waitDelivery',
					component: waitDelivery,
					meta: {
						keepAlive: true, //此组件需要被缓存
						isBack: false, //用于判断上一个页面是哪个
						requiresAuth: true
					},

				},
				{
					path: 'waitTake',
					name: 'waitTake',
					component: waitTake,
					meta: {
						keepAlive: true, //此组件需要被缓存
						isBack: false, //用于判断上一个页面是哪个
						requiresAuth: true
					},

				},
				{
					path: 'waitAssess',
					name: 'waitAssess',
					component: waitAssess,
					meta: {
						keepAlive: true, //此组件需要被缓存
						isBack: false, //用于判断上一个页面是哪个
						requiresAuth: true
					},

				},
			]
		},
		{
			path: '/selectAddress',
			name: 'selectAddress',
			component: selectAddress,
			meta: {
				requiresAuth: true,
			}
		},
		{
			path: '/index',
			name: 'index',
			component: index,
			meta: {
	
			}
		},
		{
			path: '/reviseAddress',
			name: 'reviseAddress',
			component: reviseAddress,
			meta: {
				requiresAuth: true,
			}
		},
	]
})
export default router;