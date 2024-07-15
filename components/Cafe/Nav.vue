<template>
	<div class="menu-nav">
		<div class="menu-nav__content">
			<a :href="`#${item.id}`" :class="`menu-nav__link ${ item.id == activeChapter ? 'menu-nav__link_active' : '' }`" v-for="item in menu" :key="item.id">{{ item.name }}</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		menu: Object,
		activeChapter: String
	},
	data() {
		return {
		}
	},
	methods: {
		scrollEvent() {
			var nav = window.document.querySelector('.menu-nav')
			
			nav.classList.toggle('menu-nav_sticky', window.scrollY > 373)
		}
	},
	beforeMount() {
		window.addEventListener('scroll', this.scrollEvent, false)
	},
	unmounted() {
		window.removeEventListener('scroll', this.scrollEvent, false)
	}
}
</script>


<style lang="scss">
.menu-nav {
	width: 100%;
	height: 40px;
	border-bottom: solid 1px #f2f2f2;
	position: absolute;
	top: 10px;
	background: white;

	&_sticky {
		position: fixed;
		top: 0;
	}

	&__content {
		height: 100%;
		display: flex;
		align-items: end;
		gap: 16px;

		flex-wrap: nowrap;

		padding: 0 10px;
	}

	&__link {
		padding-bottom: 12px;
		font-size: 14px;
		color: black;
		text-decoration: none;

		&_active {
			color: #F14635;
			font-weight: bold;
			border-bottom: solid 1px #F14635;
		}
	}
}
</style>