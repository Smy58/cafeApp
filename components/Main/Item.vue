<template>
	<div class="main-item" @click="openCafe">
		<h3 class="main-item__title">{{ name }}</h3>
		<p class="main-item__address">{{ address }}</p>
		<div class="main-item__content">
			<div class="main-item__info">
				<div :class="`main-item__status ${ status ? 'main-item__status_open' : '' }`"></div>
				<p class="main-item__text">{{ status ? 'Open' : 'Closed' }}</p>
			</div>
			<div class="main-item__info">
				<IconClock color="#58A000" />
				<p class="main-item__text">Waiting {{ waitingTime }} min</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: this.item?.name || '',
			address: this.item?.address || '',
			startWorkTime: this.item?.startWorkTime || '00:00',
			endWorkTime: this.item?.endWorkTime || '00:00',
			waitingTime: this.item?.waitingTime || 0,
			status: this.item?.status || false,
		}
	},
	props: {
		item: Object
	},
	methods: {
		openCafe() {
			this.$router.push({
				path: '/cafe',
				query: { cafeId: JSON.stringify(this.item.id) },
			})
		}
	},
}
</script>

<style lang="scss">

.main-item {
	width: 100%;
	padding: 15px 7px;
	box-sizing: border-box;

	display: flex;
	flex-direction: column;
	align-items: start;

	background: white;
	border-radius: 5px;

	cursor: pointer;

	&__title {
		margin: 0;
		margin-bottom: 7px;
	}

	&__address {
		margin: 0;
		margin-bottom: 5px;
	}

	&__content {
		display: flex;
		gap: 12px;
	}

	&__info {
		display: flex;
		gap: 8px;
		align-items: center;
	}

	&__status {
		width: 10px;
		height: 10px;
		border-radius: 50%;

		border: solid 1px #000;

		&_open {
			border: none;
			background: #58A000;
		}
	}

	&__text {
		margin: 0;
	}
}

</style>