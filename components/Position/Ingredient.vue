<template>
	<div class="ingredient">
		<h3 class="ingredient__title">{{ name }}</h3>
		<div class="ingredient__field" v-for="item in list" :key="item.id">
			<input @click="onChange(item)" type="radio" :name="id" :id="item.id" class="ingredient__radio">
			<label :for="item.id" class="ingredient__label">{{ item.name }}</label>
			<p class="ingredient__cost">+ {{ item.cost }} т</p>
		</div>

	</div>
</template>

<script>
export default {
	props: {
		ingredient: Object,
		addIngred: Function,
		delIngred: Function,
	},
	data() {
		return {
			name: this.ingredient?.name || '',
			id: this.ingredient?.id || '',
			list: this.ingredient?.list || [],
			value: null
		}
	},
	methods: {
		onChange(item) {
			if (this.value) {
				this.delIngred(this.value)
			}

			this.value = item
			this.addIngred(this.value)
		}
	}
}
</script>

<style lang="scss">
.ingredient {
	padding: 10px;
	padding-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: start;

	border-top: solid 1px #f2f2f2;


	&__title {
		margin: 0;
		font-size: 16px;

		margin-bottom: 8px;
	}

	&__content {
		width: 100%;
	}

	&__field {
		width: 100%;
		min-height: 56px;
		display: grid;
		grid-template-columns: 1fr 13fr 3fr;
		column-gap: 15px;
		align-items: center;
	}

	&__radio {
		width: 20px;
		height: 20px;
		margin: 0;

		border: solid 1px #C2C2C2;
		border-radius: 4px;
	}

	&__label {
		font-size: 16px;
	}

	&__cost {
		margin: 0;
		text-align: right;
	}
}
</style>