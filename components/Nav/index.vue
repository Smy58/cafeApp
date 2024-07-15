<template>
	<div :class="`nav ${!isNav ? 'nav_hide' : ''}`">
		<h3 class="nav__title">Навигация</h3>
		<button @click="onClose" class="nav__btn"><IconMenu /></button>
		<div class="nav__links">
			<router-link @click="onClose" to="/" class="nav__link"><IconCafe /> Кафе</router-link>
			<router-link @click="onClose" to="/orders" class="nav__link"><IconOrder />Заказы</router-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isNav: Boolean,
		onClose: Function
	}
}
</script>

<style lang="scss">
	.nav {
		width: 80%;
		height: 100vh;
		background: #fff;
		z-index: 200;

		position: fixed;
		top: 0;
		left: 0;
		padding: 16px;
		box-sizing: border-box;
		transition: transform 0.6s ease;

		&_hide {
			transform: translateX(-100%);
		}

		&__title {
			margin: 0;
			margin-bottom: 20px;
		}

		&__links {
			display: flex;
			flex-direction: column;
			width: 85%;

		}

		&__link {
			padding: 8px 0;
			box-sizing: border-box;
			width: 100%;
			color: black;

			text-decoration: none;

			display: flex;
			gap: 10px;

			font-size: 16px;
		}

		&__btn {
			width: 32px;
			height: 32px;
			display: flex;
			align-items: center;
			justify-content: center;

			padding: 0;

			position: absolute;
			top: 12px;
			right: 16px;

			border: none;
			outline: none;
			background: transparent;

		}
	}
</style>