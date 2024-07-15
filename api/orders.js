import { ENDPOINTS } from "./endpoints";
import Http from "~/use/useFetch";

const getOrders = async (params) => {

	return await Http.get(`${ENDPOINTS.get_all_orders}/`, params)
		.then((res) => {
			return res
		})
		.catch((err) => err);
}

const addOrder = async (params) => {
	// console.log('params');
	// console.log(params);
	return await Http.post(ENDPOINTS.add_order, params)
		.then((res) => res.data)
		.catch((err) => err);
};



export default {
	getOrders,
	addOrder
}