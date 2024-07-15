<template>
	<div class="cafe-header">
		<div class="cafe-header__img" :style="`background-image: url(${info.image})`"></div>
		<div class="cafe-header__content">
			<h2 class="cafe-header__name">{{ info.name }}</h2>
			<p class="cafe-header__address">{{ info.address }}</p>
			<div class="cafe-header__info">
				<div :class="`cafe-header__status ${ status ? 'cafe-header__status_open' : '' }`"></div>
				<p class="cafe-header__text">{{ status ? 'Open' : 'Closed' }}</p>
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
	},
	computed: {
		status() {
			if (this.info.startWorkTime && this.info.endWorkTime) {
				let dt = new Date()

				let start = this.info.startWorkTime.split(':')
				let end = this.info.endWorkTime.split(':')

				let dt1 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 
					parseInt(start[0]), parseInt(start[1]));

				let dt2 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 
					parseInt(end[0]), parseInt(end[1]));

				return dt1 <= dt && dt <= dt2
			}
			

			return false

		}
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
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
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