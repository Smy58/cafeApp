<template>
	<div class="notworking">
		<div class="notworking__content">
			<div class="notworking__icon">
				<IconError />
			</div>
			<h2 class="notworking__title">Ресторан временно не принимает заказы</h2>
			<p class="notworking__text">Попробуйте позже</p>
			<button @click="goMain" class="notworking__btn">Вернуться на главную</button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		goMain() {
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss">
.notworking {
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 16px;

	box-sizing: border-box;

	&__content {
		width: 75%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__icon {
		margin-bottom: 16px;
	}

	&__title {
		text-align: center;
		margin: 0;
		margin-bottom: 8px;
	}

	&__text {
		text-align: center;
		margin: 0;
		margin-bottom: 16px;
		font-size: 14px;
	}

	&__btn {
		width: 100%;
		height: 44px;

		outline: none;
		border: none;
		background: #0075CA;

		border-radius: 8px;

		color: #fff;
		font-size: 14px;

	}
}
</style>