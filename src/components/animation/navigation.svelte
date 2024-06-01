<script lang="ts">
	import { onNavigate } from "$app/navigation";
	import { onMount } from "svelte";

	onNavigate((navigation) => {
		//@ts-ignore
		if (!document.startViewTransition()) return;

		return new Promise((resolve) => {
			//@ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	function handleKeyDown(event: KeyboardEvent) {
		if (event.metaKey && event.key === "m") {
			window.location.href = "/tags";
		} else if (event.metaKey && event.key === "k") {
			window.location.href = "/search";
		} else if (event.metaKey && event.key === "u") {
			window.location.href = "/articles";
		}
	}

	onMount(() => {
		document.addEventListener("keydown", handleKeyDown);
	});
</script>
