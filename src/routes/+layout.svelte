<script>
	import "../styles/app.css";
	import "../styles/highlight.css";

	import Footer from "../components/shared/footer.svelte";
	import Navbar from "../components/shared/navbar.svelte";

	import "@fontsource/fira-sans/400.css";
	import "@fontsource/fira-sans/700.css";
	import "@fontsource/fira-sans/900.css";
	import "@fontsource-variable/sofia-sans";
	import "@fontsource/jetbrains-mono";
</script>

<main>
	<Navbar />
	<div class="content">
		<slot />
	</div>
	<Footer />
</main>
