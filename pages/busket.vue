<template>
	<div class="busket-page">
		<Close />
		<h2 class="busket-page__title">Заказ</h2>
		<div class="busket-page__list">
			<BusketPosition v-for="item in busketStore" :key="item.id" 
				:item="item"
				:onMinus="handleMinus"
				:onPlus="handlePlus"
				:onChange="handleChange"
				:onDel="handleDel"
			/>
		</div>

		<div v-if="busketStore.length == 0" class="busket-page__empty">
			<div class="busket-page__icon">
				<IconBag width="50px" height="50px" color="#fff" />
			</div>
			<h4 class="busket-page__empty-title">Корзина пуста!</h4>
			<button @click="goBack" class="busket-page__empty-btn">Вернуться в меню</button>
		</div>

		<BusketBar v-if="busketStore.length > 0" :busketCost="strCost" :openConfirm="toogleOpen" />
		<BusketConfirm 
			:busketCost="busketCost" 
			:cafeName="cafeName"
			:closeConfirm="toogleOpen"
			:isOpen="isOpen"
			:confirmOrder="confirmOrder"
			:bonusPayment="bonusPayment"
			:totalPayment="totalPayment"
			:toogleBonus="toogleBonus"
		/>
		<div :class="`busket-page__bg ${ isOpen ? 'busket-page__bg_show' : ''}`"></div>
	</div>
</template>

<script>
import { useBusket } from '@/store/busket.js'
import { useCafes } from '@/store/cafes.js'
import ordersApi from '@/api/orders.js'


export default {
	data() {
		return {
			isOpen: false,
			bonus: 15500,
			isBonus: false,
		}
	},
	methods: {
		toogleBonus() {
			this.isBonus = !this.isBonus
		},
		handleMinus(cost) {
			this.busketCost -= cost
		},
		handlePlus(cost) {
			this.busketCost += cost
		},
		handleChange(item) {
			const { changeCount } = useBusket()

			changeCount(item)
		},
		handleDel(itemId) {
			const { delItem } = useBusket()

			delItem(itemId)
		},
		toogleOpen() {
			this.isOpen = !this.isOpen
		},
		async confirmOrder() {
			const { getCafe } = useCafes()
			// console.log(getCafe);
			let order = {
				busket: this.busketStore,
				cafeID: getCafe.id,
				cafeName: getCafe.name,
				totalCost: this.totalPayment,
				waitingTime: getCafe.waitingTime,
			}
			console.log(order);
			ordersApi.addOrder(order)
				.then((res) => {
					console.log(res.value);
					this.$router.push({
						path: '/ok', 
						query: { order: JSON.stringify(res.value) }
					})
				})
			
		},
		goBack() {
			this.$router.go(-1)
		}
	},
	computed: {
		cafeName() {
			const { getCafe } = useCafes()

			return getCafe.name
		},
		strCost() {
			return this.busketCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
		},
		busketStore() {
			const { getBusket } = useBusket()
			let busket = getBusket
			return busket || []
		},
		busketCost() {
			let sum = 0
			this.busketStore.forEach(element => {
				sum += (element.totalCost * element.count)
			});

			return sum
		},
		bonusPayment() {
			if (this.isBonus) {
				if (this.busketCost - this.bonus < 10) {
					return this.bonus - this.busketCost + 10
				} else {
					return this.bonus - this.busketCost
				}
			} else {
				return this.bonus
			}
		},
		totalPayment() {
			if (this.isBonus) {
				if (this.busketCost - this.bonus < 10) {
					return 10
				} else {
					return this.busketCost - this.bonus
				}
			} else {
				return this.busketCost
			}
		},
	}
}
</script>

<style lang="scss">
.busket-page {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	min-height: 100vh;

	background: #fff;

	box-sizing: border-box;
	padding-top: 25px;

	&__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80px;
		height: 80px;

		background: #F14635;
		border-radius: 50%;
		margin-bottom: 16px;
	}

	&__empty {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		&-title {
			margin: 0;
			font-size: 24px;
			margin-bottom: 16px;
		}

		&-btn {
			width: 280px;
			height: 52px;

			border: none;
			outline: none;
			background: #0075CA;
			color: #fff;
			border-radius: 12px;
			font-size: 16px;

		}
	}

	&__bg {
		z-index: 100;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;

		background: #00000070;

		opacity: 0;
		transition: opacity 0.6s ease;
		transform: translateX(100%);

		&_show {
			opacity: 1;
			transform: translateX(0);
		}
	}

	&__title {
		margin: 0;
		margin-bottom: 20px;
	}

	&__list {
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;

		padding-bottom: 120px;
	}
}
</style>