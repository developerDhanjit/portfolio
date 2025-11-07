<script lang="ts">
	import '../app.css';
	import { Navbar, Footer } from '$lib/components/index.ts';

	let { children } = $props();
</script>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Manrope:wght@200..800&family=Orbitron:wght@400..900&display=swap');
</style>
