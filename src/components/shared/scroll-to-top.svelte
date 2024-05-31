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

<button
	on:click={scrollToTop}
	style="display: {showButton ? 'block' : 'none'};"
	class="hidden md:fixed"
>
	<ArrowUp />
</button>

<style>
	button {
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
		background-color: #4db1b0;
	}
</style>
