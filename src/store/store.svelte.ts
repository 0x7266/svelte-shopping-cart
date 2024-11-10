import type { Product, ProductOnCart } from '$lib/types';

export let productsOnCart = $state<{ [key: number]: ProductOnCart }>({});
export let cartDrawer = $state<{ isOpen: boolean }>({ isOpen: false });
