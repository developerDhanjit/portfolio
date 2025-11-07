<script>
	import Button from './mini-ui/button.svelte';
	let buttonStyles = 'rounded-md bg-slate-700 px-3 hover:cursor-pointer';
</script>

<nav>
	<div
		class="mx-1 flex
         items-center justify-between rounded-md px-3 py-2 text-white md:mx-3 md:my-2"
	>
		<div>
			<h2 class="font-[audiowide] text-3xl">dn.</h2>
		</div>
		<div class="flex items-center justify-around gap-3 ">
			<Button value="Experience" />
			<Button value="Products" />
			<Button value="Contact Me" />
		</div>
	</div>
</nav>
