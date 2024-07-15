<template>
	<div class="edits">
		<PositionAddons v-if="addons.length != 0" :addons="addons" 
			:addAddon="addAddon"
			:delAddon="delAddon"
		/>
		<div class="edit__engredients">
			<PositionIngredient v-for="item in ingredients" :key="item.id" 
				:ingredient="item"
				:addIngred="addIngred"
				:delIngred="delIngred"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		position: Object,
		addAddon: Function,
		delAddon: Function,
		addIngred: Function,
		delIngred: Function,
	},
	data(){
		return {
			addons: this.position?.addons || [],
			ingredients: this.position?.ingredients || []
		}
	}
}
</script>

<style lang="scss">
.edits {
	width: 100%;
	background: #fff;

	border-top-left-radius: 16px;
	border-top-right-radius: 16px;

	box-sizing: border-box;


	position: relative;
	padding-top: 10px;
	padding-bottom: 130px;
}
</style>