<script lang="ts">
	import WarningIcon from "../icons/WarningIcon.svelte";
	export let id: string = "#";

</script>

<div {id} class="my-10 w-full rounded-2xl border-2 border-warning bg-warning/30 p-4">
	<div class="mb-2 flex items-center space-x-2 text-warning">
		<WarningIcon />
		<span class="title-semi uppercase">Warning!</span>
	</div>
	<slot />
</div>
