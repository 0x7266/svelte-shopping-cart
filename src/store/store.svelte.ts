import type { ProductOnCart } from '$lib/types';

export let productsOnCart = $state<ProductOnCart[]>([]);
export let cartDrawer = $state<{ isOpen: boolean }>({ isOpen: false });
