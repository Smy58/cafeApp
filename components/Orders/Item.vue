<template>
	<div class="order-item">
		<h3 class="order-item__id">{{ id }}</h3>
		<p class="order-item__text">Ваш заказ принят</p>
		<div class="order-item__info">
			<p class="order-item__info-text"><span>Заведение:</span> <span>{{ cafeName }}</span></p>
			<p class="order-item__info-text"><span>Сумма:</span> <span>{{ strCost }} т</span></p>
			<p class="order-item__info-text"><span>Время ожидания:</span> <span>{{ waitingTime }} мин</span></p>
		</div>
		<p class="order-item__busket">
			Заказ:<br/>
			<span v-for="pos in busket" :key="pos.id" class="order-item__pos">
				<b>{{ pos.name }}</b> {{ pos.count }}x<br/>
				<span class="order-item__pos-info" v-if="pos.addons.length > 0">
					<span>{{ pos.addons[0].name }}</span><span v-for="addon in pos.addons.slice(1)" :key="addon.id">, {{ addon.name }}</span><br/>
				</span>
				<span class="order-item__pos-info" v-if="pos.ingredients.length > 0">
					<span>{{ pos.ingredients[0].name }}</span><span v-for="ingredient in pos.ingredients.slice(1)" :key="ingredient.id">, {{ ingredient.name }}</span><br>
				</span>
			</span>
		</p>
	</div>
</template>

<script>
export default {
	props: {
		item: Object
	},
	data() {
		return {
			id: this.item?.id,
			cafeName: this.item?.cafeName,
			totalCost: this.item?.totalCost,
			waitingTime: this.item?.waitingTime,
			busket: this.item?.busket,
		}
	},
	computed: {
		strCost() {
			return this.totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
		}
	}
}
</script>

<style lang="scss">
.order-item {
	width: 100%;
	padding: 16px 10px;
	box-sizing: border-box;

	border: solid 1px #f2f2f2;
	border-radius: 12px;

	&__id {
		margin: 0;
		margin-bottom: 16px;
	}

	&__text {
		margin: 0;
		margin-bottom: 8px;
		font-size: 16px;
	}
	&__info {
		font-size: 16px;
		width: 100%;
		margin-bottom: 16px;

		&-text {
			width: 100%;
			margin: 0;
			margin-bottom: 4px;
			display: flex;
			justify-content: space-between;
		}
	}

	&__busket {
		margin: 0;
	}

	&__pos {
		font-size: 14px;
		margin-bottom: 5px;
		width: 100%;

		&-info {

		}
	}
}
</style>