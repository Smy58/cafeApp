<template>
	<div class="busket-menu">
		<button @click="goBack" class="busket-menu__btn">Открыть меню</button>
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

.busket-menu {
	width: 100%;
	box-sizing: border-box;
	padding: 16px 0;

	&__btn {
		width: 100%;
		height: 44px;

		outline: none;
		background: #fff;
		border: solid 2px #A7C4F2;
		border-radius: 8px;

		color: #0075CA;
		font-size: 14px;
		font-weight: normal;
	}
}
</style>