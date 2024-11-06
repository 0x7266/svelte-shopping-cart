<script lang="ts">
	import type { Product } from '$lib/types';
	import type { PageData } from './$types';
	import { productsOnCart } from '../store/store.svelte';

	const { data }: { data: PageData } = $props();
	function generateRating() {
		return Math.floor(Math.random() * (5 - 1) + 1);
	}
</script>

<div
	class="flex justify-center items-center flex-col md:grid w-full md:grid-cols-3 lg:grid-cols-6 gap-6 p-6"
>
	{#each data.products as product}
		<div class="flex flex-col gap-4">
			<img src={product.thumbnail} alt={product.title} class="bg-gray-100 rounded-xl" />
			<div class="flex flex-col justify-between leading-tight">
				{product.title}
				<div class="grid grid-cols-2 items-end">
					<div class="flex flex-col">
						<span class="text-sm">
							{'⭐'.repeat(generateRating())}
						</span>
						<span>${product.price}</span>
					</div>
					<button
						class="font-semibold justify-self-end bg-lime-200 rounded-lg py-2 px-4"
						onclick={() => {
							productsOnCart.push({
								id: Math.floor(Math.random()).toString(),
								product,
								quantity: 1
							});
						}}>Add to cart</button
					>
				</div>
			</div>
		</div>
	{/each}
</div>
