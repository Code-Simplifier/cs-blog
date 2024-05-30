<script lang="ts">
	export let title: string;
	export let id: string = "#";

</script>

<div {id} class="my-10 w-full border-b border-slate-500 pb-2">
	<span class="title-semi text-2xl md:text-4xl uppercase text-primary">{title}</span>
</div>
