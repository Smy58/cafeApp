<template>
	<div class="ok-page">
		<h2 class="ok-page__cafe">{{ orderInfo.cafeName }}</h2>
		<div class="ok-page__content">
			<div class="ok-page__icon">
				<img :src="okImg" alt="Ok">
			</div>
			<h3 class="ok-page__title">Ваш заказ принят</h3>
			<p class="ok-page__cost">{{ orderInfo.totalCost }} т</p>
			<p class="ok-page__info">Номер заказа: {{ orderInfo.id }}</p>
			<p class="ok-page__info">Время ожидания: {{ orderInfo.waitingTime }}</p>
		</div>
		<div class="ok-page__back">
			<button @click="goMain" class="ok-page__btn">Вернуться на Главную</button>
		</div>
	</div>
</template>

<script>
import ok from '../assets/Ok/ok.png'

export default {
	data() {
		return {
			orderInfo: {},
			okImg: ok
		}
	},
	methods: {
		goMain() {
			this.$router.push('/')
		}
	},
	beforeMount() {
		console.log(this.$route.query);
		let order = JSON.parse(this.$route.query.order)

		this.orderInfo = order
	}
}
</script>

<style lang="scss">

.ok-page {
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;

	background: #F2F2F2;

	padding: 16px;
	box-sizing: border-box;

	position: relative;

	&__content {
		position: absolute;
		top: 50%;
		left: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		transform: translate(-50%, -70%);
	}

	&__icon {
		width: 60px;
		height: 60px;
		border-radius: 50%;

		background: #2CAB00;
		margin-bottom: 24px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__title {
		margin: 0;
		font-size: 24px;
		margin-bottom: 8px;
	}

	&__cost {
		margin: 0;
		font-size: 40px;
		font-weight: bold;
		margin-bottom: 8px;
	}

	&__info {
		margin: 0;
		font-size: 16px;
	}

	&__back {
		width: 100%;
		position: absolute;
		bottom: 16px;
		padding: 0 16px;
		box-sizing: border-box;
	}

	&__btn {
		width: 100%;
		height: 52px;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 0;

		outline: none;
		border: none;

		background: #0075CA;
		border-radius: 12px;
		color: #fff;
		font-size: 16px;

		
	}
}
</style>