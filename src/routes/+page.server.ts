import type { Product } from '$lib/types';

export async function load() {
	const { products } = await getProducts();
	return {
		products: products as Product[]
	};
}

async function getProducts() {
	const response = await fetch('https://dummyjson.com/products');
	return response.json();
}
