<template>
	<div class="position-header">
		<div class="position-header__img"></div>
		<div class="position-header__content">
			<h2 class="position-header__name">{{ posInfo.name }}</h2>
			<p class="position-header__info">{{ posInfo.info }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		position: Object
	},
	computed: {
		posInfo() {
			return this.position
		}
	}
}
</script>

<style lang="scss">

.position-header {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;

	background: #fff;

	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;

	&__img {
		width: 100%;
		height: 250px;
		background: #f2f2f2;
	}

	&__content {
		display: flex;
		flex-direction: column;
		padding: 10px;
		gap: 4px;
	}

	&__name {
		margin: 0;
	}
	&__info {
		margin: 0;
		margin-bottom: 8px;
	}
	
}

</style>