<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Orbitron:wght@400..900&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
