<template>
	<div id="product-details">
		<v-head></v-head>
		<!--产品详情标题部分-->
		<div class="pdtb20 disflex justifyCenter alignCenter bg-dblue product-details-title relative">
			<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-product-one.png" class="mgr10 icon-product-title">产品介绍</h1>
			<a class="arrow-left" @touchstart="routerBack"><img src="../../assets/images/arrow-left.png"></a>
		</div>
		<!--产品详情内容部分-->
		<div class="product-details-content pdtb40 pdlr20">
			<!--选项卡-->
			<div class="content-tab disflex justifyBetween">
				<a class="tab-a tab-border" :class="{Active:1==this.$route.query.tabId}">永久脱毛</a>
				<a class="tab-a tab-border" :class="{Active:2==this.$route.query.tabId}">嫩皱去肤</a>
				<a class="tab-a tab-border" :class="{Active:3==this.$route.query.tabId}">瘦脸提升</a>
			</div>
			<!--选择商品-->
			<div class="product-details-lunbo disflex justifyCenter pdtb30 ">
				<div class="big-pic mgr20" style="width:6.8rem;height:6.8rem;">
					<img :src="bigPic" class="width-all" style="height: 100%;">
				</div>
				<div class="sm-pic disflex alignCenter justifyAround column over-hidden" style="height:6.8rem;">
					<a class="arrow-up disflex flex-start" @touchstart="arrowUp();lunboOne()"><img src="../../assets/images/arrow-up.png" class="width-all"></a>
					<div style="height:3.9rem;overflow: hidden;">
						<div v-for="(item,index,key) in proDetails_lunbo.smpic" :index="index" :key="index" style="width:1.2rem;height:0.8rem;margin-top:0.5rem;" :class="{borderDblue:index == lunboNum}" @touchstart="lunbonum(item,index)">
							<img :src="item.smpic" class="width-all" style="height:100%;">
						</div>
					</div>
					<a class="arrow-down disflex flex-end" style="margin-top:0.5rem;" @touchstart="arrowDown();lunboTwo()"><img src="../../assets/images/arrow-down.png" class="width-all"></a>
				</div>
			</div>
			<div class="title mgb30 clearfix">
				<h1 class="mgb12 font14 col-dgray">{{item.title}}</h1>
				<h2 class="stitle font12 col-dgray">{{item.stitle}}</h2>
			</div>
			<div class="price">
				<p class="font14 col-dgray pdb20 border-dgray"><span class="font12 col-dgray">价格:</span>￥{{item.Number}}</p>
			</div>
			<div class="function pdtb20 border-dgray">
				<p class="font12 col-dgray">功能分类:</p>
				<ul class="disflex justifyBetween flex-wrap">
					<li v-for="(block,index,key) in item.funtion" :index="index" :key="index" class="disflex func-li font12 mgt20 col-dblue" :class="{Active:index == num}" @touchstart="tab(block,index)">
						<a>{{block.func}}</a>
					</li>
				</ul>
			</div>
			<div class="counter pdtb30 border-dgray">
				<p class="disflex alignCenter">
					<span class="font12 col-mmgray">数量:</span>
					<span class="minus col-ssgray disflex alignCenter justifyCenter" @touchstart="minus()">-</span>
					<input type="text" v-model="count" class="count disflex alignCenter text_c col-ssgray font12">
					<span class="add col-ssgray disflex alignCenter justifyCenter" @touchstart="add()">+</span>
				</p>
			</div>
			<div class="go pdtb30 disflex">
				<a class="pdtb10 pdlr35 border-red col-mred  font12 text_c" :class="{goActive:isA}" @touchstart="addClassA();toConfirm()">立即购买</a>
				<a class="pdtb10 pdlr35 border-red col-mred  font12 text_c mgl15" :class="{goActive:isB}" @touchstart="addClassB();toShopCar()">加入购物车</a>
			</div>
			<div class="product-intro">
				<div class="title disflex alignCenter justifyBetween mgb40">
					<img src="../../assets/images/line-one.png" class="img-width">
					<span class="col-dgray font14">产品详情</span>
					<img src="../../assets/images/line-two.png" class="img-width">
				</div>
				<div class="intro-content">
					<p class="font14 col-dgray">产品参数:</p>
					<p class="disflex mgt10">
						<span class="flex-one font14 col-dgray disflex">产品名称:{{item.name}}</span>
						<span class="flex-one font14 col-dgray disflex">功能:{{item.Func}}</span>
					</p>
					<p class="disflex mgt10">
						<span class="flex-one font14 col-dgray disflex">品牌:{{item.brand}}</span>
						<span class="flex-one font14 col-dgray disflex">型号:{{item.model}}</span>
					</p>
					<p class="disflex mgt10">
						<span class="flex-one font14 col-dgray disflex">工作方式:{{item.work}}</span>
						<span class="flex-one font14 col-dgray disflex">清洗方式:{{item.clean}}</span>
					</p>
					<p class="disflex mgt10">
						<span class="flex-one font14 col-dgray disflex">电源方式:{{item.source}}</span>
						<span class="flex-one font14 col-dgray disflex">除毛部位:{{item.part}}</span>
					</p>
					<p class="disflex mgt10">
						<span class="flex-one font14 col-dgray disflex">颜色分类:{{item.color}}</span>
					</p>
				</div>
				<div class="intro-pic mgt20">
					<img :src="item.pic" class="intro-pic-img">
				</div>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>
<script>
	import head from '../common/header/head.vue'
	import footer from '../common/footer/footer.vue'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { mapMutations } from 'vuex'
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
				proDetails_lunbo: [],
				proDetails_lunbo_one: '',
				proDetails_lunbo_two: '',
				item: {},
				count: 1,
				num: 0,
				bigPic: '',
				lunboNum: 0,
				isA: false,
				isB: true,
				min: 1,
				swiperOption: { //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
					notNextTick: true, // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					direction: 'vertical',
					grabCursor: true,
					setWrapperSize: true,
					resistanceRatio: 0.9,
					centeredSlides: true,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					slidesPerView: 3
				},
				name: '',
				value: ''
			}
		},
		created: function() {
			this.$ajax.post('/proDetails_lunbo').then((res) => {
				this.proDetails_lunbo = res.data[0]
				this.proDetails_lunbo_one = res.data[0].smpic[0]
				this.proDetails_lunbo_two = res.data[0].smpic[5]
				this.bigPic = res.data[0].smpic[0].smpic
			}).catch((err) => {
				console.log(err)
			})
		},
		mounted: function() {
			this.$ajax.post('/productDetails', {
				id: this.$route.query.id,
			}).then((res) => {
				this.item = res.data.productDetails[0]
				this.value = res.data.productDetails[0].funtion[0].func

			}).catch((err) => {
				console.log(err)
			})
		},
		methods: {
			routerBack() {
				this.$router.go(-1);
			},
			//arrow事件
			tab(list, index) {
				this.num = index;
				this.value = list.func
			},
			//标签事件
			addClassA() {
				if(this.isB) {
					this.isB = !this.isB
					this.isA = !this.isA
				}
			},
			//样式切换
			addClassB() {
				if(this.isA) {
					this.isA = !this.isA
					this.isB = !this.isB
				}
			},
			//样式切换
			minus() {
				if(this.count <= this.min) {
					return
				}
				this.count--

			},
			//数量减
			add() {
				this.count++
			},
			//数量加
			toShopCar() {
				this.item.username = this.$store.state.loginModule.login[1].name
				this.item.count = this.count
				this.item.func = this.value
				if(this.$store.state.loginModule.login[0].Login == 1) {
					this.$store.commit('pushId',
						this.item,
					)
				}
			},
			//去购物车页面
			toConfirm() {
				this.item.count = this.count
				this.$store.commit('buyOnce', {
						check: [this.item],
						money: this.count * this.item.Number
					}),
					this.$router.push({
						name: 'confirm',
					})
			},
			//去确认订单页面
			//选择商品↓↓
			lunbonum(item, index) {
				this.lunboNum = index
				this.bigPic = this.proDetails_lunbo.smpic[this.lunboNum].smpic
			},
			arrowUp() {
				let arr_two = this.proDetails_lunbo.smpic
				if(this.proDetails_lunbo_one == arr_two[0]) {
					Toast({
						message: '到顶啦',
						iconClass: 'icon icon-success'
					})
					return
				} else {
					arr_two.unshift(arr_two[5])
					arr_two.pop()
					let temp_two = arr_two
					this.proDetails_lunbo.smpic = temp_two
					this.bigPic = temp_two[this.lunboNum].smpic
				}
			},
			lunboOne() {
				if(this.lunboNum <= 0) {
					this.lunboNum = 0
				} else {
					this.lunboNum--

				}
			},
			arrowDown() {
				let arr = this.proDetails_lunbo.smpic
				arr.push(arr[0])
				arr.shift()
				let temp = arr
				this.proDetails_lunbo.smpic = temp
				this.bigPic = temp[this.lunboNum].smpic

			},
			lunboTwo() {
				if(this.lunboNum >= 2) {
					this.lunboNum = 0
				} else {
					this.lunboNum++

				}
			},
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