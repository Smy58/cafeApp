<template>
	<div :class="`cafe-popup ${isOpen ? 'cafe-popup_show' : ''}`">
		<div class="cafe-popup__drag-zone">
			<div class="cafe-popup__drag-bar"></div>
		</div>
		<div class="cafe-popup__content">
			<PositionHeader :position="position"/>
			<PositionEdits v-if="position?.addons || position?.ingredients"
				:position="position"
				:addAddon="addAddon"
				:delAddon="delAddon"
				:addIngred="addIngred"
				:delIngred="delIngred"
			/>
			<PositionButtonBar 
				:cost="totalCost" 
				:count="count"
				:plusCount="plusCount"
				:minusCount="minusCount"
				:addToBusket="addToBusket"
			/>
		</div>
	</div>
</template>

<script>
import { useBusket } from '@/store/busket.js'

export default {
	data() {
		return {
			touchStart: 0,
			orderAddons: [],
			orderIngredients: [],
			count: 1
		}
	},
	props: {
		position: Object,
		isOpen: Boolean,
		onClose: Function,
	},
	methods: {
		addAddon(addon) {
			this.orderAddons.push(addon)
		},
		delAddon(addon){
			const ind = this.orderAddons.findIndex((obj) => obj.id === addon.id)
			this.orderAddons.splice(ind, 1)
		},
		addIngred(ingredient) {
			this.orderIngredients.push(ingredient)
			// console.log(this.orderIngredients);

		},
		delIngred(ingredient) {
			const ind = this.orderIngredients.findIndex((obj) => obj.id === ingredient.id)
			this.orderIngredients.splice(ind, 1)
		},
		plusCount() {
			this.count += 1
		},
		minusCount() {
			this.count -= 1
		},
		clearData() {
			this.orderAddons = []
			this.orderIngredients = []
			this.count = 1
		},
		closePopup(popup) {
			this.onClose()

			this.clearData()

			setTimeout(() => {
				popup.style.top = 'auto'
				popup.style.bottom = 0
			}, 1000)
		},
		addToBusket() {
			const { addItem } = useBusket()
			const popup = document.querySelector('.cafe-popup')

			const order = {
				id: this.orderItem.id,
				name: this.orderItem.name,
				cost: this.orderItem.cost,
				count: this.count,
				totalCost: this.totalCost,
				addons: this.orderAddons,
				ingredients: this.orderIngredients,
				image: this.orderItem.image
			}

			addItem(order);

			this.clearData()
			this.closePopup(popup)
		},
		onTouchStart(e) {
			console.log(e);
			this.touchStart = e.changedTouches[0].clientY
		},
		onTouchMove(popup, e) {
			var touchTargetLocation = e.targetTouches[0]

			if (touchTargetLocation.clientY >= this.touchStart) {
				popup.style.bottom = (0 - (touchTargetLocation.clientY - this.touchStart)) + 'px'
			}
		},
		onTouchEnd(popup, e) {
			var touchLocation = e.changedTouches[0]

			if (touchLocation.clientY > 150 + this.touchStart) {
				this.closePopup(popup)
			} else {
				popup.style.top = 'auto'
				popup.style.bottom = 0
			}
		}
	},
	computed: {
		totalCost() {
			let sum = this.orderItem.cost

			this.orderAddons.forEach((element) => {
				// console.log(element);
				sum += element.cost
			});

			this.orderIngredients.forEach((element) => {
				// console.log(element);
				sum += element.cost
			});

			return sum
		},
		orderItem() {
			return {
				id: this.position.id,
				name: this.position.name,
				cost: this.position.cost,
				image: this.position.image
			}
		}
	},
	mounted() {


		const drag = document.querySelector('.cafe-popup__drag-zone')
		const popup = document.querySelector('.cafe-popup')
		popup.style.bottom = 0

		drag.addEventListener('touchstart', (e) => {
			this.onTouchStart(e)
		})

		drag.addEventListener('touchmove', (e) => {
			this.onTouchMove(popup, e)
		})

		drag.addEventListener('touchend', (e) => {
			this.onTouchEnd(popup, e)
		})
	},
	beforeUnmount() {
		const drag = document.querySelector('.cafe-popup__drag-zone')
		const popup = document.querySelector('.cafe-popup')

		drag.removeEventListener('touchstart', (e) => {
			this.onTouchStart(e)
		})

		drag.removeEventListener('touchmove', (e) => {
			this.onTouchMove(popup, e)
		})

		drag.removeEventListener('touchend', (e) => {
			this.onTouchEnd(popup, e)
		})

	}
}
</script>

<style lang="scss">

.cafe-popup {
	width: 100%;
	max-height: 98vh;
	background: #fff;
	position: fixed;
	padding-top: 26px;
	box-sizing: border-box;
	bottom: 0;
	overflow: hidden;

	z-index: 120;

	transform: translateY(100%);
	transition: transform 0.5s ease, top 0.1s ease, bottom 0.5s ease;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;

	&_show {
		transform: translateY(0);
	}

	&__drag-zone {
		width: 100%;
		height: 16px;

		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
	}

	&__drag-bar {
		width: 32px;
		height: 4px;

		border-radius: 3px;
		background: #E0E0E0;
	}

	&__content {
		height: 100%;
		max-height: 98vh;
		overflow: scroll;
		padding-bottom: 120px;

		&::-webkit-scrollbar { 
			// display: none;
		}
	}
}

</style>