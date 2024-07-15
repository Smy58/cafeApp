import service from "~/api/cafes";
import { defineStore } from "pinia";

export const useLoader = defineStore("loader", () => {
	const loader = ref(false)

	const getLoader = computed(() => loader.value);

	const setLoader = (bool) => {
		loader.value = bool
	}


	return {
		getLoader,
		setLoader
	}
})