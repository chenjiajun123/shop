<template>
	<div id="revise-address" class="height-100">
	
		<div class="pdtb20 disflex justifyCenter alignCenter bg-dgray reivse-address-title relative">
			<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-address.png" class="mgr10 icon-address-title">修改收货地址</h1>
			<a class="arrow-left" @touchstart="routerBack"><img src="../../assets/images/arrow-left.png"></a>
			<span class="font14 col-bai" style="position: absolute; right:0.266666rem" @touchstart="perserve">保存</span>
		</div>
		<div class="revise-address-content mgt20">
			<input type="text" class="pdtb20 font12 width-all pdlr20" style="border-top: none;" v-model="list.name">
			<input type="text" class=" pdtb20 font12 width-all pdlr20 " v-model="list.telphone">
			<input type="text" class=" pdtb20 font12 width-all pdlr20 " v-model="dizhi" @focus="poPup()" readonly="readonly">
			<textarea class=" font12 width-all pdlr20" style="border-bottom:solid 1px #CCCCCC;" v-model="list.dizhiDetails "></textarea>
		</div>
		<mt-popup position="bottom" popup-transition="popup-fade" v-model="popupVisible" lockScroll="true" style="width:100%;">
			<div class="title pdtb20 disflex alignCenter justifyBetween pdlr20 relative bg-ssbai border-sgray-all">
				<a class="font12 col-mdgray" @touchstart="cancel">取消</a>
				<a class="font12 col-ssyellow" @touchstart="confirm">确定</a>
			</div>
			<mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
		</mt-popup>
		
	</div>
</template>
<script>
	
	import { Picker } from 'mint-ui'
	import { Popup } from 'mint-ui'
	import myaddress from '../../../static/address.json'
	import { Toast } from 'mint-ui'
	export default {
		components: {
			Picker,
			Popup
		},
		data() {
			return {
				list: {},
				index: '',
				dizhi: '',
				popupVisible: false,
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
			}
		},
		created: function() {
			this.list = this.$route.params.addresslist
			this.index = this.$route.params.addressindex
			this.dizhi = this.list.dizhi
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
			perserve() {
				this.list.dizhi = this.dizhi
				this.$store.commit('revise', {
					list: this.list,
					index: this.index
				})
				Toast({
					message: '保存成功',
					iconClass: 'icon icon-success'
				})
				this.$router.push({
					name: 'address',
				})
			},
			poPup(popupVisible) { //触发子组件城市选择-选择城市的事件
				this.popupVisible = !this.popupVisible; //改变了父组件的值

			},
			onMyAddressChange(picker, values) {
				if(myaddress[values[0]]) { //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
					picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
					picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
					this.myAddressProvince = values[0];
					this.myAddressCity = values[1];
					this.myAddresscounty = values[2];
				}
			},
			confirm() {
				this.popupVisible = false
				this.dizhi = this.myAddressProvince + this.myAddressCity + this.myAddresscounty
			},
			cancel() {
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