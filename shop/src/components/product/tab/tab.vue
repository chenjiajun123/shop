<template>
	<div class="content-tab disflex justifyBetween">
		<router-link :to="{name:'listShed'}" class="tab-a tab-border" active-class="Active" :id="1">永久脱毛</router-link>
		<router-link :to="{name:'listWrinkle'}" class="tab-a tab-border" active-class="Active" :id="2">嫩皱去肤</router-link>
		<router-link :to="{name:'listBotox'}" class="tab-a tab-border" active-class="Active" :id="3">瘦脸提升</router-link>
	</div>
</template>
<script>
	export default {
	
		data() {
			return {
			}
		},
		created: function() {
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