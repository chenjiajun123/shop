<template>
	<div id="shop-car">
		<v-head></v-head>
		<div class="pdtb20 disflex justifyCenter alignCenter bg-dblue shop-car-title relative">
			<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-shop.png" class="mgr10 icon-shop-title">购物车</h1>
			<a class="arrow-left" @touchstart="routerBack"><img src="../../assets/images/arrow-left.png"></a>
			<a class="edit font14 col-bai" @touchstart="Delete()">编辑</a>
		</div>
		<div class="clear pdtb10 pdlr20" :class="{delete:isShow}">
			<a class="font14 col-mred" v-show="isShow" @touchstart="addClass;DeLete()" :class="{Delete:isA}">删除</a>
		</div>
		<div class="select-all pdlr20 pdtb20 disflex alignCenter relative border-gray">
			<input type="checkbox" v-model="checked" class="checkbox-input" @touchstart.stop.prevent="checkedAll">
			<img src="../../assets/images/checkboxOne.png" v-show="!checked" class="checkbox-img" >
			<img src="../../assets/images/checkboxTwo.png" v-show="checked" class="checkbox-img" >
			<span class="col-dgray font14 mgl15">全选</span>
		</div>
		<div class="shoplist">
			<div class="item pdtb20 pdlr20 border-gray relative disflex" v-for="(block,index,key) in old" :index="index" :key="index">
				<div class="left disflex column justifyCenter">
					<input type="checkbox" v-model="checkboxModel" class="checkbox-input" :value="block">
					<img src="../../assets/images/checkboxOne.png" v-show="!checkboxModel.includes(block)" class="checkbox-img">
					<img src="../../assets/images/checkboxTwo.png" v-show="checkboxModel.includes(block)" class="checkbox-img">

				</div>
				<div class="right mgl15 disflex">
					<div class="right-pic disflex">
						<img :src="block.lunbo[0].lunbo">
					</div>
					<div class="content mgl15 disflex column justifyAround">
						<h1 class="col-dgray font14"><b>{{block.name}}</b></h1>
						<span class="font14 col-ssgray">分类:{{block.Func}}</span>
						<span class="font14 col-ssgray">颜色:{{block.color}}</span>
						<span class="font14 col-mred">￥{{block.Number}}</span>
					</div>
				</div>
				<div class="shop-counter disflex alignCenter">
					<span class="shop-minus col-ssgray disflex alignCenter justifyCenter mgl0" @touchstart="minus(block,index)">-</span>
					<input type="text" v-model="block.count" class="shop-count disflex alignCenter text_c col-ssgray font12" v-on:input="inputchange(block,index)">
					<span class="shop-add col-ssgray disflex alignCenter justifyCenter" @touchstart="add(block,index)">+</span>
				</div>
			</div>
		</div>
		<div class="bottom bg-sgray  pdb10 pdt25 mgtb30 pdlr20 clear">
			<p class="sub disflex alignCenter">
				<input type="checkbox" v-model="checked" class="checkbox-input" @touchstart.prevent="checkedAll">
				<img src="../../assets/images/checkboxOne.png" v-show="!checked" class="checkbox-img z-index-zero">
				<img src="../../assets/images/checkboxTwo.png" v-show="checked" class="checkbox-img z-index-zero">
				<span class="col-dgray font12 mgl15">全选</span>
				<router-link to="/product" class="col-dgray font12 mgl30">继续购物</router-link>
				<span class="col-dgray font12 mgl30" @touchstart="shan">清空选中商品</span>
			</p>
			<p class="mid text_r font12 col-dgray">
				运费：￥0.00
			</p>
			<p class="bot text_r font14 col-dgray">
				商品总价（含运费）：<span class="col-mred">￥{{totalprice}}</span>
			</p>
			<a class="account font16 bg-red disflex alignCenter justifyCenter mgt20" @touchstart="goConfirm()">去结算</a>
		</div>
		
		<v-footer></v-footer>
	</div>
</template>
<script>
	import head from '../common/header/head.vue'
	import footer from '../common/footer/footer.vue'
	import Vue from 'vue'
	export default {
		components: {
			"v-head": head,
			"v-footer": footer
		},
		data() {
			return {
				isShow: false,
				isA: false,
				checked: '',
				old: [],
				checkboxModel: [],
				totalMoney: 0
			}
		},
		created: function() {
			this.old = this.$store.state.shopModule.shop
		},
		mounted: function() {

		},
		methods: {
			routerBack() {
				this.$router.go(-1);
			},

			addClass() {
				this.isA = !this.isA
			},
			Delete() {
				this.isShow = !this.isShow
			},
			checkedAll(){
                    if (this.checked) { //实现反选
                        this.checkboxModel = [];
                    } else { //实现全选
                        this.checkboxModel = [];
                        this.old.map(item=>{
                        	
                             this.checkboxModel.push(item);
                        });
                    }
            },
			minus(block, index) {

				this.old.map(item => {
					if(item === block) {
						if(item.count <= 1) {
							item.count = 1
							this.old.splice(index, 1, item)
							if(this.checkboxModel.includes(block)) {
								let a = this.checkboxModel.findIndex(ele => {
									return ele == block;
								})
								this.checkboxModel.splice(a, 1, item)
							}
						} else {
							item.count = parseInt(item.count) - 1
							this.old.splice(index, 1, item)
							if(this.checkboxModel.includes(block)) {
								let a = this.checkboxModel.findIndex(ele => {
									return ele == block;
								})
								this.checkboxModel.splice(a, 1, item)
							}
						}
					}
				})
			},
			add(block, index) {
				this.old.map(item => {
					if(item == block) {
						item.count = parseInt(item.count) + 1
						this.old.splice(index, 1, item)
						if(this.checkboxModel.includes(block)) {
							let a = this.checkboxModel.findIndex(ele => {
								return ele == block;
							})
							this.checkboxModel.splice(a, 1, item)
						}
					}
				})

			},
			shan() {
				for(let i = 0; i < this.checkboxModel.length; i++) {
					for(let j = 0; j < this.old.length; j++) {
						if(this.checkboxModel[j] == this.old[i]) {
							this.old.splice(i, 1)
							this.checkboxModel.splice(j, 1)
							j = j - 1
							if(this.checked) {
								this.checked = !this.checked
							}
							this.totalMoney = 0

						}
					}
				}
				return this.old
			},
			DeLete() {
				for(let i = 0; i < this.checkboxModel.length; i++) {
					for(let j = 0; j < this.old.length; j++) {
						if(this.checkboxModel[j] == this.old[i]) {
							this.old.splice(i, 1)
							this.checkboxModel.splice(j, 1)
							j = j - 1
							if(this.checked) {
								this.checked = !this.checked
							}
							this.totalMoney = 0

						}
					}
				}
				return this.old
			},
			goConfirm() {
				this.$store.commit('pushCheck', {
					uesername: this.$store.state.loginModule.login[1].name,
					money: this.totalprice,
					check: this.checkboxModel,
				})
				this.$router.push({
					name: 'confirm',
				})
				this.$store.commit('change', this.old)
			},
			inputchange(block, index) {
				if(this.checkboxModel.includes(block)) {
					let a = this.checkboxModel.findIndex(ele => {
						return ele == block;
					})
					this.checkboxModel.splice(a, 1, block)
				}
			}
		},
		computed: {
			totalprice: function() {

				if(this.checkboxModel.length < 1) {
					this.totalMoney = 0
				} else {
					this.totalMoney = 0
					this.checkboxModel.map(item => {
						this.totalMoney += item.count * item.Number

					})
				}
				return this.totalMoney
			}

		},
		filters: {

		},
		watch: { //深度 watcher
			'checkboxModel': {
				handler: function(val, oldVal) {
					if(this.checkboxModel.length === this.old.length) {
						if(this.checkboxModel.length >= 1 && this.old.length >= 1) {
							this.checked = true;
						}
					} else {
						this.checked = false;
					}
				},
					
			},
		},
	}
</script>

<style scoped="scoped">

</style>