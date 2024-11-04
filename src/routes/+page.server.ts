import type { Product } from '$lib/types';

export async function load() {
	const response = await fetch('https://dummyjson.com/products');
	const data = await response.json();
	console.log(data);
	return {
		products: data.products as Product[]
	};
}
