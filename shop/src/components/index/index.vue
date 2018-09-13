<template>
	<div id="index">
		<v-head></v-head>
		<!--主页轮播图部分-->
		<div class="index-banner">
			<swiper :options="swiperOption" ref="mySwiper" class="over-hiddenn" id="swiper-one">
				<swiper-slide v-for="(ban,index,key) in banner" :index="index" :key="index" :style="{backgroundImage: 'url(' + ban + ')', backgroundSize:'cover'}" style="height:5.333333rem;width:100%;">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<!--主页品牌介绍部分-->
		<div class="brand-introduction pdlr20 mgtb30">
			<h1 class="brand-introduction-title font14 col-dblue  disflex alignCenter justifyCenter column"><span>品牌介绍</span><span class="font12 col-dblue">About us</span></h1>
			<div class="intro-content mgt20">
				<div class="pic"></div>
				<h1 class="font14 col-dgray mgt20 intro-content-title">{{indexIntro.ctitle}}</h1>
				<p class="mgt10"><span v-for="(item,index,key) in indexIntro.Cword" :index="index" :key="key" class="mgr20 bg-green pdlr15 font12 col-bai ">{{item.cword}}</span></p>
				<p class="font12 col-dgray text-indent mgt30">{{indexIntro.cparagraph}}</p>
				<p class="mgt20 disflex alignCenter justifyCenter">
					<router-link to="/aboutUs" class="col-dblue font14 border-dblue-all disflex alignCenter justifyCenter" style="width:2.666666rem;height:0.8rem;">查看详情>></router-link>
				</p>
			</div>
		</div>
		<!--主页商品中心部分-->
		<div class="product-center pdlr20 mgtb30">
			<h1 class="product-center-title font14 col-dblue  disflex alignCenter justifyCenter column"><span>产品中心</span><span class="font12 col-dblue">product center</span></h1>
			<div class="product-center-content">
				<div class="product-center-pic disflex justifyBetween mgt20 flex-wrap">
					<div class="left-pic disflex border-sgray-all relative" style="width:45%;height:5.333333rem;">
						<p class="width-all bg-dblue disflex alignCenter justifyCenter col-bai" style="height:1.066666rem;position: absolute;bottom: 0;">{{indexProduct.leftctitle}}</p>
					</div>
					<div class="right-pic disflex border-sgray-all relative" style="width:45%;height:5.333333rem;">
						<p class="width-all bg-dblue disflex alignCenter justifyCenter col-bai" style="height:1.066666rem;position: absolute;bottom: 0;">{{indexProduct.rightctitle}}</p>
					</div>
					<p class="mgt30 disflex alignCenter justifyCenter width-all">
						<router-link to="/product" class="col-dblue font14 border-dblue-all disflex alignCenter justifyCenter" style="width:2.666666rem;height:0.8rem;">查看更多>></router-link>
					</p>
				</div>
			</div>
		</div>
		<!--主页新闻中心部分-->
		<div class="news-center pdlr20 mgtb30">
			<h1 class="news-center-title font14 col-dblue  disflex alignCenter justifyCenter column"><span>新闻中心</span><span class="font12 col-dblue">news center</span></h1>
			<div class="news-center-content mgt10 ">
				<div class="list border-sgray-all mgt20 disflex" v-for="(list,index,key) in indexNews.News" :index="index" :key="list.id">
					<div class="list-left-pic disflex">
						<img :src="list.pic">
					</div>
					<div class="right-info disflex justifyCenter column">
						<span class="font14">{{list.title}}</span>
						<span class="text-overflow-two col-mmgray font12" style="-webkit-box-orient: vertical;">{{list.cparagraph}}</span>
						<span class="col-ssgray font12">{{list.Date}}</span>
					</div>
				</div>
				<p class="mgt20 disflex alignCenter justifyCenter">
					<router-link to="/news" class="col-dblue font14 border-dblue-all disflex alignCenter justifyCenter" style="width:2.666666rem;height:0.8rem;">查看更多>></router-link>
				</p>
			</div>
		</div>
		<!--主页联系我们部分-->
		<div class="contact-us pdlr20 mgt30">
			<h1 class="contact-us-title font14 col-dblue  disflex alignCenter justifyCenter column"><span>联系我们</span><span class="font12 col-dblue">contact us</span></h1>
			<div class="contact-us-content mgt30 disflex flex-wrap">
				<p class="font12 disflex alignCenter "><span class="col-dgray">姓名</span><input type="text" class="contact-us-input font12 " v-model="name"></p>
				<p class="font12 disflex alignCenter"><span class="col-dgray index-span ">电话</span><input type="text" class="contact-us-input font12 " v-model="phone"></p>
				<p class="font12 disflex alignCenter  mgt20"><span class="col-dgray ">邮箱</span><input type="text" class="contact-us-input font12 " v-model="email"></p>
				<p class="font12 disflex alignCenter mgt20"><span class="col-dgray index-span ">地址</span><input type="text" class="contact-us-input font12"></p>
				<p class="font12 disflex alignCenter mgt20 "><span class="col-dgray ">内容</span><textarea class="contact-us-input font12" style="height: 1.333333rem;"></textarea></p>
				<div class="font12 disflex mgt20 ">
					<a class="font12  col-bai bg-dblue submit-button" style="margin-left:1.2rem;" @click="submit">提交</a>
				</div>
				<div class="contact-us-method mgtb30">
					<span class="font14 col-dgray pdb10 border-dblue-bottom">联系方式</span>
					<p class="font12 col-dgray mgt20">地址：深圳市福田区天安数码城科技创业园A座703</p>
					<p class="font12 col-dgray mgt20">邮箱：gsdmedical@163.com</p>
				</div>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>
<script>
	import head from '../common/header/head.vue'
	import footer from '../common/footer/footer.vue'
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { Toast } from 'mint-ui'
	export default {
		components: {
			"v-head": head,
			"v-footer": footer,
			swiper,
			swiperSlide
		},
		data() {
			return {
				name: '',
				email: '',
				phone: '',
				indexIntro: {},
				indexProduct: [],
				indexNews: [],
				banner: [
					require("../../assets/images/bannaerOne.jpg"),
					require("../../assets/images/bannaerTwo.jpg"),
					require("../../assets/images/bannaerThree.jpg")
				],
				//轮播图
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
					},
					slidesPerView: 1,
					autoplay: true,
					loop: true,
				}

			}
		},
		created: function() {
			this.$ajax.get('/indexIntro').then((res) => {
				this.indexIntro = res.data[0];
			}).catch((err) => {
				console.log(err)
			})
			this.$ajax.get('/indexProduct').then((res) => {
				this.indexProduct = res.data[0];
			}).catch((err) => {
				console.log(err)
			})
			this.$ajax.get('/indexNews').then((res) => {
				this.indexNews = res.data[0]
			}).catch((err) => {
				console.log(err)
			})
		},
		mounted: function() {
			// 这边就可以使用swiper这个对象去使用swiper官网中的那些方法
			this.swiper.slideTo(1, 1000, false)
		},
		methods: {
			submit() {
				if(!this.validate.Regusername(this.name)) {
					Toast({
						message: '请输入正确的姓名',
						iconClass: 'icon icon-success'
					});
					return ''
				} else if(!this.validate.Regemail(this.email)) {
					Toast({
						message: '请输入正确的邮箱',
						iconClass: 'icon icon-success'
					});
					return ''
				} else if(!this.validate.RegTelPhone(this.phone)) {
					Toast({
						message: '请输入正确的手机号码',
						iconClass: 'icon icon-success'
					});
					return ''
				} else {
					Toast({
						message: '提交成功',
						iconClass: 'icon icon-success'
					});
				}
			}
			//表单提交事件
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		filters: {

		}
	}
</script>

<style scoped="scoped">

</style>