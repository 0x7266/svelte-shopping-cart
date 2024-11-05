<script lang="ts">
	import type { Category } from '$lib/types';

	interface Props {
		categories: Category[];
	}

	const { categories }: Props = $props();
</script>

<aside class="flex flex-col gap-1 p-4 border-r-2 h-full">
	{#each categories as c}
		<a href="/products/{c.slug}">
			{c.name}
		</a>
	{/each}
</aside>
