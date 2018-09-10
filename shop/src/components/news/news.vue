<template>
	<div id="news">
		<v-head></v-head>
		<!--新闻标题部分-->
		<div class="pdtb20 disflex justifyCenter alignCenter bg-dblue news-title">
			<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-news.png" class="mgr10 icon-news-title">新闻中心</h1>
		</div>
		<!--新闻列表部分-->
		<newslist></newslist>
		<v-footer></v-footer>
	</div>
</template>
<script>
	import newslist from './newslist/newslist.vue'
	import head from '../common/header/head.vue'
	import footer from '../common/footer/footer.vue'
	export default {
		components: {
			newslist,
			"v-head": head,
			"v-footer": footer
		},
		data() {
			return {

			}
		},
		created: function() {},
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