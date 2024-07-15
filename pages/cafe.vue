<template>
	<div class="cafe">
		<Close :onClose="exit" />
		<CafeHeader :info="cafe"/>
		<CafeMenu :menu="cafe.menu" :onOpenPos="openPosition" />

		<CafeBusket v-if="busket.length > 0" :totalCost="totalCost"/>

		<CafePopup :onClose="tooglePopup" :isOpen="isPopup" :position="position" />
		<div v-if="isPopup" :class="`cafe__bg ${isPopup ? 'cafe__bg_show' : ''}`"></div>
	</div>
</template>

<script>
import { useCafes } from '@/store/cafes.js'
import { useBusket } from '@/store/busket.js'
import { useLoader } from '@/store/loader.js'

import cafeApi from '@/api/cafes.js'

export default {
	data() {
		return {
			cafe: {},
			isPopup: false,
			position: {}
		}
	},
	computed: {
		busket() {
			const { getBusket } = useBusket()
			let busket = getBusket
			return busket || []
		},
		totalCost() {
			let sum = 0
			this.busket.forEach(element => {
				sum += (element.totalCost * element.count)
			});

			return sum
		}
	},
	methods: {
		exit() {
			this.$router.push('/')
		},
		tooglePopup() {
			this.isPopup = !this.isPopup
			if (this.isPopup) {
				document.body.style.overflow = 'hidden'
			} else {
				document.body.style.overflow = 'auto'

			}
		},
		openPosition(pos) {
			this.position = pos
			this.tooglePopup()
		}
	},
	async beforeMount() {
		const { setCurCafe } = useCafes()
		const { setLoader } = useLoader()
		const cafe = ref({})

		let cafeId = JSON.parse(this.$route.query.cafeId)

		setLoader(true)
		await cafeApi.getCafeId(cafeId)
		const { data } = await cafeApi.getCafeId(cafeId)
		cafe.value = await data?.value;
		setLoader(false)

		setCurCafe( cafe.value )

		this.cafe = cafe.value

		if (this.cafe.notWorking) {
			this.$router.push('/notworking')
		}

	}
}
</script>

<style lang="scss">

.cafe {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	background: #F2F2F2;

	box-sizing: border-box;

	&__bg {
		z-index: 100;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;

		background: #00000070;

		opacity: 0;
		transition: opacity 0.6s ease;
		transform: translateX(100%);

		&_show {
			opacity: 1;
			transform: translateX(0);
		}
	}

}

</style>