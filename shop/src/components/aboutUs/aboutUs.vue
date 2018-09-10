<template>
	<div id="about-us">
		<v-head></v-head>
		<!--关于我们标题部分-->
		<div class="pdtb20 disflex justifyCenter alignCenter bg-dblue about-title">
			<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/title-icon.png" class="mgr10 icon-about-title">品牌介绍</h1>
		</div>
		<!--关于我们内容部分-->
		<div class="about-content">
			<img :src="aboutUs.pic" class="about-us-pic">
			<p class="font12 col-sgray pd20 text-indent about-us-cparagraph">{{aboutUs.cparagraph}}</p>
		</div>
		<v-footer></v-footer>
	</div>
</template>
<script>
	import head from '../common/header/head.vue'
	import footer from '../common/footer/footer.vue'
	export default {
		components: {

			"v-head": head,
			"v-footer": footer
		},
		data() {
			return {
				aboutUs: []
			}
		},
		created: function() {
			this.$ajax.get('/aboutUs').then((res) => {
				console.log(res);
				this.aboutUs = res.data[0];

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