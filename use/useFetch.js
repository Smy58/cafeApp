const baseUrl = 'https://my-json-server.typicode.com/Smy58/cafeApi'

export default class Http {

	static options() {

		return {
			baseURL: baseUrl,
		};
	}

	static post(path, data) {
		console.log('post');
		console.log(path);
		console.log(data);
		return useFetch(() => path, {
			method: "post",
			...this.options(),
			body: data,
		})
			.then((res) => res)
			.catch((err) => err);
	}

	static del(path, data) {
		return useFetch(() => path, {
			method: "delete",
			...this.options(),
			body: data,
		})
			.then((res) => res)
			.catch((err) => err);
	}

	static get(path) {
		return useFetch(() => path, {
			method: "get",
			...this.options(),
		})
			.then((res) => res)
			.catch((err) => err);
	}
}