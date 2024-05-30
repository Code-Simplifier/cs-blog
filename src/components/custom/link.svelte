<script lang="ts">
	export let url: string = "#";
	export let title: string = "Link";
</script>

<a href={url}>
	<span class="content-bold italic text-primary underline mr-1">{title}</span>
</a>
