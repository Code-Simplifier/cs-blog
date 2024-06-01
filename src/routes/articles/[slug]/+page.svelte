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
	<span class="code font-semibold mt-10 mb-5 uppercase tracking-wider text-sm md:text-lg text-slate-700">[{" "}{data.metadata.category}{" "}]</span>
	<span class="title-bold mb-2 mx-2 text-center text-lg md:text-5xl uppercase"
		>{data.metadata.title}</span
	>
	<span class="content-bold mb-2 text-center md:text-xl text-slate-500">
		Updated On <span class="italic">
			{formatDate(data.metadata.date)}
		</span>
	</span>
	<div class="flex gap-x-2">
		{#each data.metadata.tags as tag}
			<a href="/tags/{tag.title}" class={`code rounded-xl px-2 ${tag.bgColor} ${tag.fgColor}`}>#{tag.title}</a>
		{/each}
	</div>
	<div class="my-10 w-[5%] rounded-2xl bg-slate-700 p-1" />
	<div class="prose mt-20 w-[80%] overflow-x-hidden text-justify text-lg md:text-xl">
		<svelte:component this={data.content} />
	</div>
</article>
