<script lang="ts">
	export let url: string = "#";
	export let title: string = "Link";
	export let id: string = "#";
</script>

<a href={url}>
	<span {id} class="content-bold italic text-primary underline mr-1">{title}</span>
</a>
