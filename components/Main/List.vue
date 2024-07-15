<template>
	<div class="main-list">
		<MainItem v-for="item in cafeList" :key="item.id" :item="item" />
	</div>
</template>

<script>
export default {
	props: {
		cafeList: Array
	}
}
</script>

<style lang="scss">

.main-list {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 5px;
}

</style>