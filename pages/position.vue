<template>
	<div class="position-page">
		<Close />
		<PositionHeader :position="position"/>
		<PositionEdits v-if="position.addons || position.ingredients"
			:position="position"
			:addAddon="addAddon"
			:delAddon="delAddon"
			:addIngred="addIngred"
			:delIngred="delIngred"
		/>

		<PositionButtonBar :cost="totalCost" 
			:count="count"
			:plusCount="plusCount"
			:minusCount="minusCount"
		/>
	</div>
</template>

<script>

export default {
	data() {
		return {
			position: {},
			orderItem: {},
			orderAddons: [],
			orderIngredients: [],
			count: 1
		}
	},
	beforeMount() {
		this.position = JSON.parse(this.$route.query.position)
		console.log(this.position);

		this.orderItem = {
			id: this.position.id,
			name: this.position.name,
			cost: this.position.cost,
		}
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
			console.log(this.orderIngredients);

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
		}
	},
	computed: {
		totalCost() {
			let sum = this.orderItem.cost

			this.orderAddons.forEach((element) => {
				console.log(element);
				sum += element.cost
			});

			this.orderIngredients.forEach((element) => {
				console.log(element);
				sum += element.cost
			});

			console.log(sum);


			return sum
		}
	}
}
</script>

<style lang="scss">
.position-page {
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	background: #F2F2F2;

	box-sizing: border-box;
	padding-top: 25px;

	position: relative;

}
</style>