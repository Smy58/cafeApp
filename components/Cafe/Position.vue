<template>
	<div class="position">
		<div class="position__content">
			<div class="position__img" :style="`background-image: url(${position.image})`">
				<IconPlate v-if="position.image === ''" :color="'#f2f2f2'"/>
			</div>
			<h4 class="position__name">{{ name }}</h4>
		</div>
		<button @click="openPosition" class="position__btn">{{ costString }} т</button>
	</div>
</template>

<script>
export default {
	props: {
		position: Object,
		onOpenPos: Function
	},
	data() {
		return {
			name: this.position?.name || '',
			cost: this.position?.cost || 0,
			image: this.position?.image || ''
		}
	},
	computed: {
		costString() {
			return this.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
		}
	},
	methods: {
		openPosition() {
			this.onOpenPos(this.position)
		}
	}
}
</script>

<style lang="scss">

.position {
	width: 166px;
	height: 256px;

	border-radius: 12px;
	border: solid 1px #f2f2f2;
	background: #fff;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 12px;
	box-sizing: border-box;

	&__content {
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	&__img {
		width: 140px;
		height: 140px;
		margin-bottom: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	&__name {
		font-weight: normal;
		font-size: 14px;
		margin: 0;

	}

	&__btn {
		background: #0075CA;
		border: none;
		outline: none;

		border-radius: 10px;
		width: 100%;
		height: 32px;

		display: flex;
		align-items: center;
		justify-content: center;

		color: white;
	}

}

</style>