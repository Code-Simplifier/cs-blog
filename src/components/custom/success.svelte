<script lang="ts">
	import SuccessIcon from "../icons/SuccessIcon.svelte";
	export let id: string = "#";

</script>

<div {id} class="my-10 w-full rounded-2xl border-2 border-success bg-success/30 p-4">
	<div class="flex space-x-2 mb-2 items-center text-success">
		<SuccessIcon />
        <span class="uppercase title-semi">success</span>
	</div>
	<slot />
</div>
