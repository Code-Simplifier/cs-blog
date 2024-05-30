<script lang="ts">
	import SummaryIcon from "../icons/SummaryIcon.svelte";
	export let id: string = "#";

</script>

<div {id} class="my-10 w-full rounded-2xl border-2 border-primary bg-primary/30 p-4">
	<div class="flex space-x-2 mb-2 items-center text-primary">
		<SummaryIcon />
        <span class="uppercase title-semi">Summary</span>
	</div>
	<slot />
</div>
