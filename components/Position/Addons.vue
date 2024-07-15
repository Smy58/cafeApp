<template>
	<div class="addons">
		<h3 class="addons__title">Добавки</h3>
		<div class="addons__content">
			<PositionAddon v-for="item in addons" :key="item.id" 
				:item="item"
				:addAddon="addAddon"
				:delAddon="delAddon"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		addons: Array,
		addAddon: Function,
		delAddon: Function,
	},
	
}
</script>

<style lang="scss">
.addons {
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: start;

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

	&__checkbox {
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