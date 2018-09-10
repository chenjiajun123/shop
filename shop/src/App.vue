<template>
	<div id="app" class="height-100">
		<transition :name="transitionName" mode="out-in">
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive" class="transitionBody" >
					<!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
				</router-view>
			</keep-alive>
		</transition>
		<transition :name="transitionName" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive" class="transitionBody" >
				<!-- 这里是不被缓存的视图组件，比如 page3 -->
			</router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				transitionName: 'slide-left',
			}
		},
		watch: {

		},
		beforeRouteUpdate(to, from, next) {
			console.log(to, from)
			if(this.$route.path != '/index') //假设name为home的路由都使用`slide-left`,其它的路由都为`slider-right`
			{
				this.$router.isBack = true;
			}
			let isBack = this.$router.isBack
			if(isBack) {
				this.transitionName = 'slide-right'
			} else {
				this.transitionName = 'slide-left'
			}
			this.$router.isBack = false
			next()
		}
	}
</script>

<style>
	/*路由切换动画*/
	
	.slide-left-enter-active {
		transition: all .3s ease;
	}
	
	.slide-left-leave-active {
		transition: all .3s ease;
	}
	
	.slide-left-enter,
	/* .slide-fade-leave-active for below version 2.1.8 */
	
	{
		transform: translateX(100%);
		opacity: 0;
	}
	
	.slide-left-leave-to {
		transform: translateX(-100%);
		opacity: 0;
	}
	
	.slide-right-enter-active {
		transition: all .3s ease;
	}
	
	.slide-right-leave-active {
		transition: all .3s ease;
	}
	
	.slide-right-enter,
	/* .slide-fade-leave-active for below version 2.1.8 */
	
	{
		transform: translateX(-100%);
		opacity: 0;
	}
	
	.slide-right-leave-to {
		transform: translateX(100%);
		opacity: 0;
	}
</style>