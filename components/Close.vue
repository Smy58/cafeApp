<template>
	<div @click="goBack" class="close">
		<IconClose width="14px" height="14px" color="#fff" />
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

		width: 24px;
		height: 24px;
		padding: 5px;
		box-sizing: border-box;

		position: absolute;
		top: 8px;
		right: 16px;
		background: #E0E0E0;

		border-radius: 8px;
	}
</style>