<template>
	<div class="newslist pdlr15">
		<ul class="list">
			<li v-for="(item,index,key) in showlist" :key="item.id" :index="item.id" class="list-item">
				<a class="pic pdtb20 disflex justifyCenter alignCenter"><img :src="item.pic" class="newslist-pic"></a>
				<h1 class="font14 col-black">{{item.title}}</h1>
				<span class="font12 mgt20 col-ssgray">{{item.Date}}</span>
				<p class="font12 col-mmgray text-overflow-three relative">{{item.cparagraph}}
					<router-link :to="{ path:'/newsDetails:id', query:{ id:item.id }}" class="col-mmgray font12 details">详情>></router-link>
				</p>
			</li>
		</ul>
		<a class="watch-more font16" @touchstart="showAll = !showAll">{{showAll?'收起':'更多'}}</a>
	</div>

</template>
<script>
	export default {
		data() {
			return {
				newslist: [],
				showAll: false,

			}
		},
		created: function() {
			this.$ajax.get('/newslist').then((res) => {
				this.newslist = res.data[0].newslist
			}).catch((err) => {
				console.log(err)
			})
		},
		mounted: function() {

		},
		methods: {

		},
		computed: {
			showlist: function() {
				if(this.showAll == false) {
					let showlist = [];
					if(this.newslist.length > 3) {
						for(let i = 0; i < 3; i++) {
							showlist.push(this.newslist[i])
						}
					} else {
						showlist = this.newslist
					}
					return showlist
				} else {
					return this.newslist
				}
			},
			//点击加载更多数据
		},
		filters: {

		}
	}
</script>

<style scoped="scoped">

</style>