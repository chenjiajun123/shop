<template>
	<div id="address" class="height-100">
		<v-head></v-head>
		<!--地址标题部分-->
		<div class="pdtb20 disflex justifyCenter alignCenter bg-dblue shop-car-title relative">
			<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-confirm.png" class="mgr10 icon-address-title">收货地址</h1>
			<a class="arrow-left" @touchstart="routerBack"><img src="../../assets/images/arrow-left.png"></a>
		</div>
		<!--添加地址表单部分-->
		<div class="add-address-content mgtb30 pdlr20">
			<p class="add-address-title font16 col-dblue mgt20">新增收货地址</p>
			<div class="message">
				<p class="mgt20 disflex alignCenter"><span class="add-address-span font12 col-sssgray disblock text_r mgr10">收件人姓名:</span><input type="text" class="add-address-input col-sssgray font12" v-model="name"></p>
				<p class="mgt20 disflex alignCenter"><span class="add-address-span font12 col-sssgray disblock text_r mgr10">收货地址:</span><input type="text" class="add-address-input col-sssgray font12" v-model="dizhi" @focus="poPup()" readonly="readonly"></p>
				<p class="mgt20 disflex alignCenter"><span class="add-address-span font12 col-sssgray disblock text_r mgr10">详细地址:</span><textarea class="add-address-textarea col-sssgray font12" v-model="dizhiDetails"></textarea></p>
				<p class="mgt20 disflex alignCenter"><span class="add-address-span font12 col-sssgray disblock text_r mgr10">手机号码:</span></span><input type="text" class="add-address-phone col-sssgray font12" v-model="telphone"><span class="add-address-span font12 col-sssgray disblock text_c ">固定号码:</span><input type="text" class="add-address-phone col-sssgray add-address-guphone font12" v-model="phone"></p>
				<p class="mgt20 disflex alignCenter"><span class="add-address-span font12 col-sssgray disblock text_r mgr10"></span>
					<a class="message-button col-bai bg-dblue font14 text_c" @touchstart="pushaddress">保存收货地址</a>
				</p>
			</div>
		</div>
		<!--保存地址部分-->
		<div class="keep-address-content mgtb30 pdlr20" v-if="keeplist.length>0">
			<p class="keep-address-title font16 col-dblue mgt20">已保存的地址</p>
			<p class="prompt-info bg-sssbai font12 pdtb10 pdlr20 mgt20 border-yellow-all">最多保存20个有效地址，您已保存{{dizhi_length}}个有效地址，剩余{{rest_length}}个。</p>
			<div class="keep-list" v-for="(list,index,key) in keeplist" :index="index" :key="index">
				<div class="list-item pdtb30 border-sgray col-mmgray">
					<p><span class="mgr40  font14 ">{{list.name}}</span><span class=" font14">{{list.telphone}}</span></p>
					<p class="mgt15 disflex justifyBetween alignCenter"><span class=" font14 ">{{list.dizhi}}</span><span class="col-mmgray font14">{{list.dizhiDetails}}</span>
						<a class="font14 col-dblue" @touchstart="revise(list,index)">修改</a><span class="font14 col-dblue" @touchstart="Delete(list,index)">删除</span></p>
				</div>
			</div>
		</div>
		<v-footer></v-footer>
		<!--选择地址弹窗-->
		<mt-popup position="bottom" popup-transition="popup-fade" style="width:100%;" v-model="popupVisible">
			<div class="title pdtb20 disflex alignCenter justifyBetween pdlr20 relative bg-ssbai border-sgray-all">
				<a class="font12 col-mdgray" @touchstart="cancel">取消</a>
				<a class="font12 col-ssyellow" @touchstart="confirm">确定</a>
			</div>
			<mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
		</mt-popup>
	</div>
</template>
<script>
	import head from '../common/header/head.vue'
	import footer from '../common/footer/footer.vue'
	import { Picker } from 'mint-ui';
	import { Popup } from 'mint-ui';
	import myaddress from '../../../static/address.json';
	import { Toast } from 'mint-ui'
	export default {
		components: {
			"v-head": head,
			"v-footer": footer,
			Picker,
			Popup
		},
		data() {
			return {
				keeplist: [],
				dizhi_length: '',
				dizhi: '',
				name: '',
				telphone: '',
				phone: '',
				dizhiDetails: '',
				popupVisible: false,
				//地址控制
				myAddressSlots: [{
						flex: 1,
						defaultIndex: 1,
						values: Object.keys(myaddress), //省份数组
						className: 'slot1',
						textAlign: 'center'
					}, {
						divider: true,
						content: '-',
						className: 'slot2'
					}, {
						flex: 1,
						values: [],
						className: 'slot3',
						textAlign: 'center'
					},
					{
						divider: true,
						content: '-',
						className: 'slot4'
					},
					{
						flex: 1,
						values: [],
						className: 'slot5',
						textAlign: 'center'
					}
				],
				myAddressProvince: '省',
				myAddressCity: '市',
				myAddresscounty: '区/县',
				//mint-ui地址选择
			}
		},
		created: function() {
			this.keeplist = this.$store.state.addressModule.address,
				this.dizhi_length = this.$store.state.addressModule.address.length
		},
		mounted: function() {
			this.$nextTick(() => { //vue里面全部加载好了再执行的函数 （类似于setTimeout）
				this.myAddressSlots[0].defaultIndex = 0
				// 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
				//因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
			});
		},
		methods: {
			routerBack() {
				this.$router.go(-1);
			},
			//arrow返回事件
			poPup(popupVisible) { //触发子组件城市选择-选择城市的事件
				this.popupVisible = !this.popupVisible; //改变了父组件的值

			},
			//弹窗控制
			onMyAddressChange(picker, values) {
				if(myaddress[values[0]]) { //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
					picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
					picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
					this.myAddressProvince = values[0];
					this.myAddressCity = values[1];
					this.myAddresscounty = values[2];
				}
			},
			//地址选择
			confirm() {
				this.popupVisible = false
				this.dizhi = this.myAddressProvince + this.myAddressCity + this.myAddresscounty
			},
			cancel() {
				this.popupVisible = false

			},
			pushaddress() {
				if(!this.validate.Regusername(this.name)) {
					Toast({
						message: '收件人姓名不少于两个字',
						iconClass: 'icon icon-success'
					});
					return ''
				} else if(this.dizhi === '') {
					Toast({
						message: '请选择地区',
						iconClass: 'icon icon-success'
					});
					return ''
				} else if(this.dizhiDetails === '') {
					Toast({
						message: '请输入正确的详细地址',
						iconClass: 'icon icon-success'
					});
					return ''
				} else if(!this.validate.RegTelPhone(this.telphone)) {
					Toast({
						message: '请输入正确的手机号码',
						iconClass: 'icon icon-success'
					});
					return ''
				} else if(this.phone === '') {
					Toast({
						message: '请输入正确的固定号码号码',
						iconClass: 'icon icon-success'
					});
					return ''
				} else {
					if(this.$store.state.addressModule.address.length < 20) {
						this.$store.commit('pushaddress', {
							username: this.$store.state.loginModule.login[1].name,
							dizhi: this.dizhi,
							name: this.name,
							telphone: this.telphone,
							phone: this.phone,
							dizhiDetails: this.dizhiDetails,
						})
						console.log(this.$store.state.addressModule.address)
						this.dizhi = '',
							this.name = '',
							this.telphone = '',
							this.phone = '',
							this.dizhiDetails = '',
							this.dizhi_length = this.$store.state.addressModule.address.length
						Toast({
							message: '保存地址成功',
							iconClass: 'icon icon-success'
						});

					} else {
						Toast({
							message: '最多保存20个地址',
							iconClass: 'icon icon-success'
						});
					}
				}
			},
			//地址传递到vuex地址模块
			Delete(list, ind) {

				if(this.$store.state.addressModule.address.length >= 1) {
					this.$store.state.addressModule.address.forEach(item => {
						if(item === list) {
							this.$store.state.addressModule.address.splice(ind, 1)
							Toast({
								message: '删除成功',
								iconClass: 'icon icon-success'
							});
							this.keeplist = this.$store.state.addressModule.address
						}
					})

				} else {
					this.keeplist = []
				}
				this.dizhi_length = this.$store.state.addressModule.address.length
			},
			//删除地址事件
			revise(list, index) {
				this.$router.push({
					name: 'reviseAddress',
					params: {
						addresslist: list,
						addressindex: index
					}
				})
			}
			//修改地址事件
		},
		computed: {
			rest_length() {
				return 20 - this.dizhi_length
			},
			//剩余可添加的地址
		},
		filters: {

		},
		watch: {

		},

	}
</script>

<style scoped="scoped">

</style>