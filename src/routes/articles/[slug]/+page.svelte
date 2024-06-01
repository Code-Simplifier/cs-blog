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
	<span
		class="code mb-5 mt-10 text-sm font-semibold uppercase tracking-wider text-slate-700 md:text-lg"
		>[{" "}{data.metadata.category}{" "}]</span
	>
	<h1
		class="title-bold mx-2 mb-2 text-center text-lg uppercase md:text-5xl"
	>
		{data.metadata.title}
	</h1>
	<span class="content-bold mb-2 text-center text-slate-500 md:text-xl">
		Updated On <span class="italic">
			{formatDate(data.metadata.date)}
		</span>
	</span>
	<div class="flex gap-x-2">
		{#each data.metadata.tags as tag}
			<a href="/tags/{tag.title}" class={`code rounded-xl px-2 ${tag.bgColor} ${tag.fgColor}`}
				>#{tag.title}</a
			>
		{/each}
	</div>
	<div class="my-10 w-[5%] rounded-2xl bg-slate-700 p-1" />
	<img src="{data.metadata.thumbnail}" alt={data.metadata.title} class="w-[90%] rounded-2xl" />
	<div class="prose mt-20 w-[80%] overflow-x-hidden text-justify text-lg md:text-xl">
		<svelte:component this={data.content} />
	</div>
</article>

