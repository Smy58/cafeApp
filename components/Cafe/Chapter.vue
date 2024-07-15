<template>
	<div class="chapter" :id="id">
		<h3 class="chapter__title">{{ name }}</h3>

		<CafePositions :positions="positions" :onOpenPos="onOpenPos"/>
	</div>
</template>

<script>
export default {
	props: {
		chapter: Object,
		setActive: Function,
		onOpenPos: Function
	},
	data() {
		return {
			id: this.chapter?.id || '',
			name: this.chapter?.name || '',
			positions: this.chapter?.positions || []
		}
	},
	methods: {
		handleScroll() {
			const ch = window.document.getElementById(this.id)
			let top = window.scrollY
			let offset = ch.offsetTop
			let height = ch.offsetHeight

			if (top >= offset && top < offset + height) {
				this.setActive(this.id)
			}
		}
	},
	beforeMount() {
		
		window.addEventListener('scroll', this.handleScroll)
	},
	unmounted() {
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>

<style lang="scss">

.chapter {
	padding: 10px;
	width: 100%;
	box-sizing: border-box;

	margin-bottom: 20px;

	&__title {
		margin: 0;
		margin-bottom: 15px;
	}
}

</style>