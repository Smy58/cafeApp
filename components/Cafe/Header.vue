<template>
	<div class="cafe-header">
		<div class="cafe-header__img"></div>
		<div class="cafe-header__content">
			<h2 class="cafe-header__name">{{ info.name }}</h2>
			<p class="cafe-header__address">{{ info.address }}</p>
			<div class="cafe-header__info">
				<div :class="`cafe-header__status ${ info.status ? 'cafe-header__status_open' : '' }`"></div>
				<p class="cafe-header__text">{{ info.status ? 'Open' : 'Closed' }}</p>
			</div>
			<div class="cafe-header__info">
				<IconClock color="#757575"/>
				<p class="cafe-header__text">Waiting {{ info.waitingTime }} min</p>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	props: {
		info: Object
	}
}
</script>

<style lang="scss">

.cafe-header {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;

	background: #fff;

	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;

	&__img {
		width: 100%;
		height: 200px;
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
	&__address {
		margin: 0;
		margin-bottom: 8px;
	}
	&__text {
		margin: 0;
		color: #757575;
	}

	&__info {
		display: flex;
		gap: 8px;
		align-items: center;
	}

	&__status {
		width: 12px;
		height: 12px;
		margin: 2px;
		border-radius: 50%;

		border: solid 1px #000;

		&_open {
			border: none;
			background: #58A000;
		}
	}
}

</style>