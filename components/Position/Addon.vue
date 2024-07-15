<template>
	<div class="addons__field">
		<input @click="toogleInput" type="checkbox" :name="item.id" :id="item.id" class="addons__checkbox">
		<label :for="item.id" class="addons__label">{{ item.name }}</label>
		<p class="addons__cost">+ {{ item.cost }} ₸</p>
	</div>
</template>

<script>
export default {
	props: {
		item: Object,
		addAddon: Function,
		delAddon: Function,
	},
	data(){
		return {
			isChoose: false,
		}
	},
	methods: {
		toogleInput(addon) {
			this.isChoose = !this.isChoose
			console.log(this.isChoose);
			if (this.isChoose) {
				this.addAddon(this.item)
			} else {
				this.delAddon(this.item)
			}
		}
	}
}
</script>

<style lang="scss">

</style>