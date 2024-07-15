import { ENDPOINTS } from "./endpoints";
import Http from "~/use/useFetch";

const getCafes = async (params) => {

	return await Http.get(`${ENDPOINTS.get_all_cafes}/`, params)
		.then((res) => {
			return res
		})
		.catch((err) => err);
}

const getCafeId = async (id, params) => {

	return await Http.get(`${ENDPOINTS.get_all_cafes}/${id}`, params)
		.then((res) => {
			return res
		})
		.catch((err) => err);
}

export default {
	getCafes,
	getCafeId
}