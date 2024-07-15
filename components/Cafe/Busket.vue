<template>
	<div class="cafe-busket">
		<div class="cafe-busket__content">
			<p class="cafe-busket__cost">К оплате: <b>{{ costString }} ₸</b></p>
			<div @click="openBusket" class="btn cafe-busket__btn">Смотреть заказ</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		totalCost: Number
	},
	computed: {
		costString() {
			let cost = this.totalCost ? this.totalCost : 0
			return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
		}
	},
	methods: {
		openBusket() {
			this.$router.push('/busket')
		}
	}
}
</script>


<style lang="scss">
.cafe-busket {
	width: 100%;
	padding: 16px;
	box-sizing: border-box;

	position: fixed;
	bottom: 0;

	background: #fff;
	border-top: solid 1px #f2f2f2;

	&__content {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	&__cost {
		margin: 0;
		margin-bottom: 12px;
	}

	&__btn {
		width: 100%;
		height: 52px;
		padding: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		background: #0075CA;
		color: #fff;

		border-radius: 12px;
	}
}
</style>