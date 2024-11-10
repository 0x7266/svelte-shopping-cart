<script lang="ts">
	import type { ProductOnCart } from '$lib/types';
	import { productsOnCart } from '../store/store.svelte';

	function addToCart(p: ProductOnCart) {
		if (p.id in productsOnCart) {
			p.quantity++;
			return;
		}
		productsOnCart.push({
			product: p.product,
			id: p.id,
			quantity: 0
		});
		p.quantity++;
	}
</script>

<div class="flex flex-col gap-2 min-h-60 items-center">
	{#if productsOnCart.length == 0}
		<div class="text-2xl font-semibold">No products on cart</div>
	{:else}
		{#each productsOnCart as product}
			{@render item(product)}
		{/each}
	{/if}
</div>

{#snippet item(p: ProductOnCart)}
	<div class="flex justify-between items-center gap-2 w-full">
		<img src={p.product.thumbnail} alt={p.product.title} class="w-16" />
		<div class="flex flex-col flex-1 justify-center">
			<span>
				{p.product.title}
			</span>
			<span>
				{p.product.price}
			</span>
		</div>
		<div class="flex gap-6 items-center">
			<div class="text-2xl font-semibold flex gap-2 items-center">
				<button
					onclick={() => {
						if (p.quantity <= 0) return;
						p.quantity -= 1;
					}}
				>
					-
				</button>
				<span>{p.quantity}</span>
				<button
					onclick={() => {
						p.quantity += 1;
					}}
				>
					+
				</button>
			</div>
			<p>❌</p>
		</div>
	</div>
{/snippet}
