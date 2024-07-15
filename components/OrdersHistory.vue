<template>
	<div @click="openHistory" class="orders-history">История заказов</div>
</template>

<script>
export default {
	methods: {
		openHistory() {
			this.$router.push('/orders')
		}
	}
}
</script>

<style lang="scss">
	.orders-history {
		width: 140px;
		height: 42px;

		display: flex;
		align-items: center;
		justify-content: center;

		position: fixed;
		bottom: 16px;
		right: 16px;

		border-radius: 14px;
		color: #fff;
		background: #0075CA;
		font-size: 14px;
	}
</style>