<template>
	<div class="busket-position">
		<div class="busket-position__img" :style="`background-image: url(${image})`">
			<IconPlate v-if="image === ''" :color="'#f2f2f2'" />
		</div>
		<div class="busket-position__content">
			<h3 class="busket-position__title">{{ name }}</h3>
			<p class="busket-position__text">{{ infoText }}</p>
			<p class="busket-position__cost">{{ strCost }} ₸</p>

			<div class="busket-position__count">
				<button @click="minusCount" class="busket-position__count-btn">
					<IconDel :color="'#0075CA'" v-if="count === 1"/>
					<IconMinus :color="'#0075CA'" v-if="count != 1"/>
				</button>
				<p class="busket-position__count-text">{{ count }} шт</p>
				<button @click="plusCount" class="busket-position__count-btn">
					<IconPlus :color="'#0075CA'" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		item: Object,
		onMinus: Function,
		onPlus: Function,
		onChange: Function,
		onDel: Function
	},
	beforeMount() {
		console.log(this.item);
	},
	data() {
		return {
			name: this.item?.name || '',
			addons: this.item?.addons || [],
			ingredients: this.item?.ingredients || [],
			cost: this.item?.totalCost || 0,
			count: this.item?.count || 1,
			image: this.item?.image || '',
		}
	},
	methods: {
		plusCount() {
			this.count += 1
			this.onPlus(this.cost)
			this.onChange({
				id: this.item.id,
				count: this.count,
				totalCost: this.totalCost,
			})
		},
		minusCount() {
			this.onMinus(this.cost)
			if (this.count === 1) {
				this.onDel(this.item.id)
			} else {
				this.count -= 1
				this.onChange({
					id: this.item.id,
					count: this.count,
					totalCost: this.totalCost,
				})
			}
		}
	},
	computed: {
		infoText() {
			let str = ''
			this.addons.forEach(element => {
				str += element.name + ', '
			});

			this.ingredients.forEach(element => {
				str += element.name + ', '
			});

			str = str.slice(0, -1)

			return str
		},
		totalCost() {
			return this.cost * this.count
		},
		strCost() {
			return this.totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
		}
	},
}
</script>

<style lang="scss">
	.busket-position {
		width: 100%;
		display: flex;
		gap: 12px;
		align-items: center;

		padding: 12px 0;

		&__img {
			width: 97px;
			height: 97px;

			display: flex;
			align-items: center;
			justify-content: center;

			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;

			border-radius: 12px;
		}

		&__content {
			display: flex;
			flex-direction: column;
			align-items: start;

			gap: 4px;

		}

		&__title {
			margin: 0;
			font-size: 14px;
		}

		&__text {
			margin: 0;
			color: #757575;
			font-size: 14px;
			margin-bottom: 4px;
		}

		&__cost {
			margin: 0;
			font-weight: bold;
			font-size: 16px;
			margin-bottom: 4px;
		}

		&__count {
			display: flex;
			gap: 8px;
			align-items: center;

			&-btn {
				outline: none;
				border: solid 1px #A7C4F2;
				border-radius: 8px;

				display: flex;
				align-items: center;
				justify-content: center;

				width: 32px;
				height: 32px;

				background: #fff;
				cursor: pointer;
			}

			&-text {
				margin: 0;
			}

		}
	}
</style>