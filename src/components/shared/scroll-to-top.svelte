<script>
	import { onMount } from "svelte";
	import ArrowUp from "../icons/ArrowUp.svelte";

	let showButton = false;

	onMount(() => {
		window.addEventListener("scroll", handleScroll);
	});

	function handleScroll() {
		showButton = window.pageYOffset > 500;
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
</script>

<button on:click={scrollToTop} style="display: {showButton ? 'block' : 'none'};">
	<ArrowUp />
</button>

<style>
	button {
		position: fixed;
		bottom: 20px;
		right: 20px;
		padding: 10px;
		background-color: #99f6e4;
		color: #000;
		border: none;
		border-radius: 50%;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}
</style>
