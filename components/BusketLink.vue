<template>
	<div @click="openBusket" class="busket-link">
		<IconBag color="#fff"/>
		<div class="busket-link__count">0</div>
	</div>
</template>

<script>
export default {
	methods: {
		openBusket() {
			this.$router.push('/busket')
		}
	}
}
</script>

<style lang="scss">
	.busket-link {
		width: 40px;
		height: 40px;
		box-sizing: border-box;

		border-radius: 50%;
		background: #F14635;

		position: fixed;
		bottom: 16px;
		right: 16px;

		display: flex;
		align-items: center;
		justify-content: center;

		&__count {
			position: absolute;
			width: 24px;
			height: 24px;
			background: #F14635;
			border: solid 1px #fff;
			border-radius: 50%;
			top: 0;
			right: 0;
			transform: translate(50%, -50%);

			color: #fff;

			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 10px;
		}
	}
</style>