<script lang="ts">
	let isOpen = $state(false);
</script>

<header class="bg-orange-600 py-3 px-6 md:px-0 text-3xl">
	<div class="flex justify-between md:w-2/3 mx-auto">
		<span class=" text-white font-bold">SvelteMart</span>
		<div class="relative">
			<button class="" onclick={() => (isOpen = !isOpen)}>🛒</button>
			{#if isOpen}
				<div class="absolute bg-neutral-200 w-20 h-24 rounded-2xl right-2 top-10"></div>
			{/if}
		</div>
	</div>
</header>
