import service from "~/api/cafes";
import { defineStore } from "pinia";

export const useBusket = defineStore("busket", () => {
	const busket = ref([])

	const getBusket = computed(() => busket.value);

	const setItems = (items) => {
		if (items?.length) {
			busket.value = items
		}
	}

	const addItem = (item) => {
		const newItems = busket.value;

		newItems.push(item);

		busket.value = newItems
	}

	const delItem = (id) => {
		const newItems = busket.value;
		const ind = newItems.findIndex((item) => item.id == id);
		newItems.splice(ind, 1)

		busket.value = newItems
	}

	const changeCount = (changedItem) => {
		const newItems = busket.value;

		newItems.map((item) => {

			if (item.id == changedItem.id) {
				item.count = changedItem.count;
			}
		})
		busket.value = newItems
	}





	return {
		busket,
		setItems,
		addItem,
		delItem,
		changeCount,
		getBusket
	}
})