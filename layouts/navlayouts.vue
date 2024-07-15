<template>
	<div>
		<Nav :onClose="toogleNav" :isNav="isNav"/>
		<button @click="toogleNav" class="nav-button">
			<IconMenu />
		</button>
		<slot />
	</div>
</template>

<script>
export default {
	data() {
		return {
			isNav: false
		}
	},
	methods: {
		toogleNav() {
			this.isNav = !this.isNav
		}
	},
}
</script>

<style lang="scss">
.nav-button {
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 0;

	position: absolute;
	top: 24px;
	left: 16px;

	border: none;
	outline: none;
	background: transparent;
}
</style>