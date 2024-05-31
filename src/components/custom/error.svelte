<script lang="ts">
	import ErrorIcon from "../icons/ErrorIcon.svelte";
	export let id: string = "#";

</script>

<div {id} class="my-10 w-full rounded-2xl border-2 border-error bg-error/30 p-4">
	<div class="mb-2 flex items-center space-x-2 text-error">
		<ErrorIcon />
		<span class="title-semi uppercase">Error!</span>
	</div>
	<slot />
</div>
