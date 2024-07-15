<template>
	<div class="main">
		<h2 class="main__title">Cafes</h2>
		<MainList :cafeList="filterStatusList" />
	</div>
</template>

<script>
import { useCafes } from '@/store/cafes.js'
import { useLoader } from '@/store/loader.js'

import cafeApi from '@/api/cafes.js'

export default {
	setup() {
		definePageMeta({
			layout: "navlayouts",
		});
	},
	data() {
		return {
			cafeList: [],
		}
	},
	async beforeMount() {
		const { setItems } = useCafes()
		const { setLoader } = useLoader()
		const cafes = ref([]);


		setLoader(true)
		await cafeApi.getCafes()
		const { data } = await cafeApi.getCafes()
		cafes.value = await data?.value;
		setLoader(false)

		setItems( cafes.value )

		this.cafeList = [...cafes.value]
		
	},
	computed: {
		filterStatusList () {
			this.cafeList.forEach(element => {
				let dt = new Date()

				let start = element.startWorkTime.split(':')
				let end = element.endWorkTime.split(':')

				let dt1 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 
					parseInt(start[0]), parseInt(start[1]));

				let dt2 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 
					parseInt(end[0]), parseInt(end[1]));

				element.status = dt1 <= dt && dt <= dt2

			});
			var newList = this.cafeList.sort((a, b) => {				
				return a.status === b.status ? (a.waitingTime - b.waitingTime) : a.status ? -1 : 1
			})
			// console.log(newList);
			return newList
		}
	}
}
</script>

<style lang="scss">

.main {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	background: #F2F2F2;

	padding: 5px;

	box-sizing: border-box;
	padding-top: 25px;

	&__title {
		width: 100%;
		margin: 0;
		margin-bottom: 10px;
		text-align: center;
	}

}

</style>