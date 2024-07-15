<template>
	<div class="positions">
		<CafePosition v-for="item in positions" :key="item.id" :position="item" :onOpenPos="onOpenPos"/>
	</div>
</template>

<script>
export default {
	props: {
		positions: Array,
		onOpenPos: Function
	}
}
</script>

<style lang="scss">

.positions {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	column-gap: 12px;
	row-gap: 16px;

}

</style>