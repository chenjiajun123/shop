<template>
	<div id="select-address">
		<!--选择地址标题-->
		<div class="pdtb20 disflex justifyCenter alignCenter bg-dgray select-address-title relative">
			<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-address.png" class="mgr10 icon-address-title">我的收货地址</h1>
			<a class="arrow-left" @touchstart="routerBack"><img src="../../assets/images/arrow-left.png"></a>
			<span class="font14 col-bai" style="position: absolute; right:0.266666rem" @click="replace">确定</span>
		</div>
		<!--选择地址-->
		<div class="select-address-content " v-if="keeplist.length>0">
			<div class="select-address-list" v-for="(list,index,key) in keeplist" :index="index" :key="index">
				<div class="list-item pdtb30 pdlr20 border-sgray col-mmgray" :class="{colDblue:index == num}" @touchstart="tab(list,index)">
					<p><span class="mgr40  font14 ">{{list.name}}</span><span class="font14">{{list.telphone}}</span></p>
					<p class="mgt15 disflex justifyBetween alignCenter"><span class="font14 ">{{list.dizhi}}</span></p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				keeplist: [],
				num: 0
			}
		},
		created: function() {
			this.keeplist = this.$store.state.addressModule.address
		},
		mounted: function() {

		},
		methods: {
			routerBack() {
				this.$router.go(-1);
			},
			//arrow事件
			isactive() {
				this.isActive = !this.isActive
			},
			tab(list, index) {
				this.num = index;
			},
			replace() {
				let _this = this
				if(this.$store.state.addressModule.address.length >= 1) {
					this.$store.state.addressModule.address.forEach(function(item, index, key) {
						if(_this.num == index) {
							_this.$store.commit('Select', _this.num)
						}
					})
				}
				this.$router.push({
					name: 'confirm',
				})
			}
			//默认地址选择替换
		},
		computed: {

		},
		filters: {

		}
	}
</script>

<style scoped="scoped">

</style>