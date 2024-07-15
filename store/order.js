import service from "~/api/cafes";
import { defineStore } from "pinia";

export const useOrder = defineStore("order", () => {
	const orders = ref([])

	const getOrders = computed(() => orders.value);

	const setItems = (items) => {
		if (items?.length) {
			orders.value = items
		}
	}

	const addItem = (item) => {
		const newItems = orders.value;

		newItems.push(item);

		orders.value = newItems
	}

	const delItem = (id) => {
		const newItems = orders.value;
		const ind = newItems.findIndex((item) => item.id == id);
		newItems.splice(ind, 1)

		orders.value = newItems
	}

	const changeCount = (changedItem) => {
		const newItems = orders.value;

		newItems.map((item) => {

			if (item.id == changedItem.id) {
				item.count = changedItem.count;
			}
		})
		orders.value = newItems
	}


	return {
		orders,
		setItems,
		addItem,
		delItem,
		changeCount,
		getOrders
	}
})