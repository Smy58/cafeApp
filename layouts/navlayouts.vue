<template>
	<div>
		<Nav :onClose="toogleNav" :isNav="isNav"/>
		<button @click="toogleNav" class="nav-button">
			<IconMenu />
		</button>
		<slot />
		<Loader v-if="isLoad" />
	</div>
</template>

<script>
import { useLoader } from '@/store/loader.js'

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
	computed: {
		isLoad() {
			const { getLoader } = useLoader()
			return getLoader
		}
	}
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