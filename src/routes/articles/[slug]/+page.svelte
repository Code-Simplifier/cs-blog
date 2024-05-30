<script lang="ts">
	export let data;
	import { formatDate } from "$lib/utils";
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
</svelte:head>

<article class="flex flex-col items-center overflow-x-hidden rounded-2xl pt-32">
	<span class="title-bold mb-2 mt-10 text-center text-5xl px-2 uppercase">{data.metadata.title}</span>
	<span class="content-bold mb-2 text-xl text-slate-500">
		Updated On <span class="italic">
			{formatDate(data.metadata.date)}
		</span>
	</span>
	<div class="flex gap-x-2">
		{#each data.metadata.tags as tag}
			<div class={`code rounded-xl px-2 ${tag.bgColor} ${tag.fgColor}`}>#{tag.title}</div>
		{/each}
	</div>
	<div class="my-10 w-[5%] rounded-2xl bg-slate-700 p-1" />
	<div class="prose text-xl text-justify mt-20 w-[90%]">
		<svelte:component this={data.content} />
	</div>
</article>
