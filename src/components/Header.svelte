<script lang="ts">
	import cartIcon from '../assets/cartIcon.png';
	import { cartDrawer } from '../store/store.svelte';
	import CartList from './CartList.svelte';
	// interface Props {
	//  	categories: Category[];
	// }
	// const { categories }: Props = $props();
</script>

<header class="bg-orange-900 flex flex-col justiy-center text-white">
	<div class="flex justify-between items-center gap-4 py-2 px-6">
		<span class="font-bold text-4xl">SvelteMart</span>
		<div class="flex flex-col justify-center">
			<p class="text-xs leading-none">Enviar para Fulano</p>
			<p class="text-base font-semibold leading-none">Saturn... 000000</p>
		</div>
		<div class=""></div>
		<input type="text" class="p-2 flex-1 rounded-md" placeholder="Pesquise na SvelteMart" />
		<div class="flex flex-col justify-center">
			<p class="text-xs leading-none">Olá, Fulano</p>
			<p class="text-base font-semibold leading-none">Contas e listas</p>
		</div>
		<div class="flex flex-col justify-center">
			<p class="text-xs leading-none">Devoluções</p>
			<p class="text-base font-semibold leading-none">e pedidos</p>
		</div>
		<div class="relative">
			<button class="flex items-end" onclick={() => (cartDrawer.isOpen = !cartDrawer.isOpen)}
				><img src={cartIcon} class="w-8 filter invert" alt="cart" /><span
					class="text-sm font-semibold">Carrinho</span
				></button
			>
			{#if cartDrawer.isOpen}
				<div
					class="absolute bg-neutral-100 text-black min-w-[28rem] min-h-fit p-4 rounded-lg right-2 top-10 flex justify-around flex-col gap-4"
				>
					<p class="border-b-2 pb-2">Your cart</p>
					<CartList />
					<p>Total</p>
				</div>
			{/if}
		</div>
	</div>
	<ul class="flex justify-between px-6 py-2 bg-orange-800 text-base">
		<li class="font-semibold">Todos</li>
		<li>Venda na SvelteMart</li>
		<li>Atendimento ao cliente</li>
		<li>Oferta do dia</li>
		<li>Livros</li>
		<li>Comprar novamente</li>
		<li>Histórico de navegação</li>
		<li>Fulano Amazon.com.br</li>
		<li>eBooks Svindle</li>
		<li>Alimentos e bebidas</li>
		<li>Prime</li>
		<li>Mais vendidos</li>
		<li>Brinquedos e jogos</li>
		<li>Casa</li>
		<li>Games</li>
	</ul>
</header>
