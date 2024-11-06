<script lang="ts">
	import type { ProductOnCart } from '$lib/types';
	import { productsOnCart } from '../store/store.svelte';
</script>

<div class="flex flex-col gap-2">
	{#each productsOnCart as product}
		{@render item(product)}
	{/each}
</div>

{#snippet item(p: ProductOnCart)}
	<div class="flex justify-between">
		<img src={p.product.thumbnail} alt={p.product.title} class="w-20" />
		<div>
			<span>
				{p.product.title}
			</span>
			<span>
				{p.product.price}
			</span>
		</div>
		<div class="flex gap-2">
			<button onclick={() => {}}> - </button>
			<span>{p.quantity}</span>
			<button onclick={() => {}}> + </button>
		</div>
		<p>❌</p>
	</div>
{/snippet}
