<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import type { LayoutData } from './$types';

	let { children, data }: { children: Snippet; data: LayoutData } = $props();
</script>

<Header categories={data.categories} />
<div class="flex">
	<Sidebar categories={data.categories} />
	{@render children()}
</div>
