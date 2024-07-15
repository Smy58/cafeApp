<template>
	<div class="button-bar">
		<p class="button-bar__text">Итого: <b>{{ totalCost }}</b></p>

		<div class="button-bar__control">
			<div class="button-bar__count">
				<button @click="minusCount" :class="`button-bar__count-btn ${count === 1 ? 'button-bar__count-btn_dis' : ''}`" :disabled="count === 1">-</button>
				<p class="button-bar__count-text">{{ count }} шт</p>
				<button @click="plusCount" class="button-bar__count-btn">+</button>
			</div>

			<button @click="addToBusket" class="button-bar__btn">Добавить</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		cost: Number,
		count: Number,
		plusCount: Function,
		minusCount: Function,
		addToBusket: Function
	},
	data() {
		return {

		}
	},
	computed: {
		totalCost() {
			var total = this.cost * this.count
			return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
		},
	},
}
</script>

<style lang="scss">
.button-bar {
	width: 100%;
	padding: 16px;
	background: #fff;

	border-top: solid 1px #f2f2f2;

	position: fixed;
	bottom: 0;

	display: flex;
	flex-direction: column;
	align-items: start;

	box-sizing: border-box;

	&__text {
		margin: 0;
		margin-bottom: 12px;
	}

	&__control {
		width: 100%;
		display: grid;
		grid-template-columns: 5fr 6fr;
		column-gap: 10px;
	}

	&__count {
		display: flex;
		background: #F3F6FB;
		border-radius: 12px;
		padding: 10px 12px;

		box-sizing: border-box;

		justify-content: space-between;
		align-items: center;

		&-btn {
			width: 32px;
			height: 32px;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #fff;

			border: none;
			border-radius: 8px;
			color: #0075CA;
			font-size: 24px;
			padding: 0;

			&_dis {
				opacity: 0.5;
			}
		}

		&-text {
			margin: 0;
			font-size: 14px;
		}
	}

	&__btn {
		background: #0075CA;
		border: none;
		border-radius: 12px;

		color: #fff;

		font-size: 16px;
		font-weight: 500;
	}
}
</style>