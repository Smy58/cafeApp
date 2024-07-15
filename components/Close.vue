<template>
	<div @click="goBack" class="close">
		<IconClose width="24px" height="24px" color="#fff" />
	</div>
</template>

<script>
export default {
	methods: {
		goBack() {
			this.$router.go(-1)
		}
	}
}
</script>

<style lang="scss">
	.close {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 28px;
		height: 28px;
		box-sizing: border-box;

		position: absolute;
		top: 8px;
		right: 16px;
		background: #00000033;

		border-radius: 8px;
	}
</style>