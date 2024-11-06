<script lang="ts">
	import type { Category } from '$lib/types';

	interface Props {
		categories: Category[];
	}

	const { categories }: Props = $props();
</script>

<aside class="hidden md:flex p-6">
	<div class="flex flex-col gap-1 border-r-2 pr-8">
		<p class="font-semibold text-lg">Categories</p>
		{#each categories as c}
			<a href="/products/{c.slug}" class="text-sm">
				{c.name}
			</a>
		{/each}
	</div>
</aside>
