import service from "~/api/cafes";
import { defineStore } from "pinia";

export const useCafes = defineStore("cafes", () => {
	const cafes = ref([])
	const curCafe = ref([])

	const getCafe = computed(() => curCafe.value);

	const setItems = (items) => {
		if (items?.length) {
			cafes.value = items
		}
	}

	const setCurCafe = (item) => {
		curCafe.value = item
	}

	return {
		cafes,
		setItems,
		setCurCafe,
		getCafe
	}
})