<template>
	<div class="orders-page">
		<h2 class="orders-page__title">Ваши заказы</h2>
		<div class="orders-page__list">
			<OrdersItem v-for="item in orders" :key="item" :item="item"/>
		</div>
	</div>
</template>

<script>
import { useOrder } from '@/store/order.js'
import { useLoader } from '@/store/loader.js'

import orderApi from '@/api/orders.js'

export default {
	setup() {
		definePageMeta({
			layout: "navlayouts",
		});
	},
	data() {
		return {
			orders: [],
		}
	},
	async beforeMount() {
		const { setItems } = useOrder()
		const { setLoader } = useLoader()

		const ordersRef = ref([]);

		setLoader(true)
		await orderApi.getOrders()
		const { data } = await orderApi.getOrders()
		ordersRef.value = await data?.value;
		setLoader(false)

		setItems( ordersRef.value )

		this.orders = [...ordersRef.value]
		
	},

}
</script>

<style lang="scss">

.orders-page {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	min-height: 100vh;

	background: #fff;

	box-sizing: border-box;
	padding-top: 25px;

	&__title {
		margin: 0;
		margin-bottom: 20px;
	}

	&__list {
		width: 100%;
		padding: 0 16px;
		display: flex;
		flex-direction: column;

		box-sizing: border-box;
		gap: 8px;
	}

}

</style>