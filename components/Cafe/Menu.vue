<template>
	<div class="menu">
		<CafeNav :menu="menu" :activeChapter="activeChapter"/>
		<CafeChapter v-for="item in menu" :key="item.id" :chapter="item" :setActive="handleActive" :onOpenPos="onOpenPos"/>
	</div>
</template>

<script>
export default {
	props: {
		menu: Object,
		onOpenPos: Function
	},
	data() {
		return {
			activeChapter: '0'
		}
	},
	methods: {
		handleActive(chapter) {
			// console.log(chapter);
			this.activeChapter = chapter
		}
	}
}
</script>

<style lang="scss">

.menu {
	width: 100%;
	background: #fff;

	border-top-left-radius: 16px;
	border-top-right-radius: 16px;

	box-sizing: border-box;


	position: relative;
	padding-top: 50px;
	padding-bottom: 150px;
	
}

</style>