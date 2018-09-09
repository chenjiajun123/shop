<template>
	<div id="news-details">
		<v-head></v-head>
		<div class="pdtb20 disflex justifyCenter alignCenter bg-dblue news-details-title relative">
			<h1 class="font18 col-bai disflex alignCenter"><img src="../../assets/images/icon-news.png" class="mgr10 icon-news-title">新闻介绍</h1>
			<a class="arrow-left" @touchstart="routerBack"><img src="../../assets/images/arrow-left.png"></a>
		</div>
		<div class="details-content pdlr20">
			<h1 class="content-title pdtb20 font16 text_c title-border col-dgray bold">{{item.title}}</h1>
			<p class="content-cparagraph pdtb20 text-indent font12 col-dgray">{{item.cparagraph}}</p>
			<img :src="item.pic" class="content-pic newsDetails-pic mgt20">
			<p class="font12 text-indent mgt20 content-date col-dgray">会议时间:<span>{{item.Date}}</span></p>
			<p class="font12 text-indent mgt20 content-county col-dgray">会议地点:<span>{{item.county}}</span></p>
			<p class="font12 text-indent mgt20 content-paragraph col-dgray">{{item.paragraph}}</p>
		</div>
		<div class="pdtb20 details-bottom pdlr20">
			<a class="font12 disblock col-dgray">上一篇:{{item.pre}}</a>
			<a class="font12 mgt20 col-dgray">下一篇：{{item.next}}</a>
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
				item: {}
			}
		},
		created: function() {},
		mounted: function() {
			this.$ajax.post('/newsDetails', {
				id: this.$route.query.id,

			}).then((res) => {
				this.item = res.data.newsDetails[0]
			}).catch((err) => {
				console.log(err)
			})
		},

		methods: {
			routerBack() {
				this.$router.go(-1);
			}
		},
		computed: {

		},
		filters: {

		}
	}
</script>

<style scoped="scoped">

</style>