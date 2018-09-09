<template>
	
	<div id="footer" class="pdtb20 disflex alignCenter bg-black column  justifyCenter ">
		<div class="sub">
			<ul class="disflex font12 col-mgray alignCenter">
				<li v-for="(item,index,key) in footer_two" :index="index" :key="index" class=" pdlr15 footer-border disflex alignCenter">{{item.title}}</li>
			</ul>
		</div>
		<div class="mid text_c">
			<p class="col-mgray font12 mgt15" v-for="(item,index,key) in footer_one" :index="index">{{item.scentence}}</p>
		</div>
		<div class="bottom text_c">
			<p class="mgt15 font12 col-mgray" v-for="(item,index,key) in footer_three" :index="index">{{item.scentence}}</p>
		</div>
	</div>
	
</template>
<script>
	export default {
		data() {
			return {
				footer_one: [],
				footer_two: [],
				footer_three: []
			}
		},
		created: function() {
			this.$ajax.get('/footer').then((res) => {
				this.footer_one = res.data[0].mid
				this.footer_two = res.data[1].sub	
				this.footer_three = res.data[2].bottom
				
			}).catch((err) => {
				console.log(err)
			})
		},
		mounted: function() {

		},
		methods: {

		},
		computed: {

		},
		filters: {

		}
	}
</script>

<style scoped="scoped">

</style>