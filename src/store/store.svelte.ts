import type { ProductOnCart } from '$lib/types';

export let productsOnCart = $state<ProductOnCart[]>([]);
