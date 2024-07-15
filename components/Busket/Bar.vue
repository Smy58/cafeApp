<template>
	<div class="busket-bar">
		<p class="busket-bar__text">Итого: <b>{{ busketCost }} т</b></p>
		<button @click="openConfirm" class="busket-bar__btn">Перейти к оплате</button>
	</div>
</template>

<script>
export default {
	props: {
		busketCost: String,
		openConfirm: Function
	},
	
}
</script>

<style lang="scss">

.busket-bar {
	display: flex;
	flex-direction: column;
	align-items: start;

	position: fixed;

	background: #fff;
	bottom: 0;

	border-top: solid 1px #f2f2f2;

	width: 100%;
	padding: 16px;
	box-sizing: border-box;

	&__text {
		margin: 0;
		margin-bottom: 12px;
		font-size: 16px;
	}

	&__btn {
		width: 100%;
		border: none;
		background: #0075CA;
		color: #fff;
		height: 52px;

		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 12px;

		font-size: 16px;
	}
}

</style>