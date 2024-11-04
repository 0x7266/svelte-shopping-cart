<script lang="ts">
	import type { Product } from '../lib/types';
	const { data }: { data: { products: Product[] } } = $props();
</script>

<div class="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 w-3/5 mx-auto py-6">
	{#each data.products as product}
		<div
			class="flex flex-col gap-4 border-2 border-neutral-300 shadow-md p-4 rounded-xl bg-neutral-400"
		>
			<img src={product.thumbnail} alt={product.title} class="border rounded-xl" />
			<p class="text-lg font-semibold flex justify-between">
				{product.title}
				<span>{product.price}</span>
			</p>
		</div>
	{/each}
</div>
