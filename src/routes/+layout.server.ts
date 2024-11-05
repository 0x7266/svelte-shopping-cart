import type { Category } from '$lib/types';

export async function load() {
	const categories = await getCategories();
	return {
		categories: categories as Category[]
	};
}

async function getCategories() {
	const response = await fetch('https://dummyjson.com/products/categories');
	return response.json();
}
