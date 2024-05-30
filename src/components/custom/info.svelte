<script lang="ts">
	import InfoIcon from "../icons/InfoIcon.svelte";
	export let id: string = "#";

</script>

<div {id} class="my-10 w-full rounded-2xl border-2 border-info bg-info/30 p-4">
	<div class="flex space-x-2 mb-2 items-center text-info">
		<InfoIcon />
        <span class="uppercase title-semi">Info</span>
	</div>
	<slot />
</div>
