<script lang="ts">
	export let src: string;
	export let alt: string = "Image";
</script>

<img {src} {alt} class="rounded-2xl border-2 border-primary" />
