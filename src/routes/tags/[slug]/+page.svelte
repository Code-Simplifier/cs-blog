<script lang="ts">
	export let data;
	import Article from "../../../components/shared/article.svelte";
	import { tags } from "../../../content/tags/tags";

	export const getTagByTitle = (title: string = data.title) =>
		tags.find((tag) => tag.title === title);
</script>

<section class="flex flex-col items-center justify-center pt-44">
	<span class="title-bold mb-5 text-2xl capitalize tracking-wide md:text-6xl">
		{data.title}
	</span>
	<span class="content flex items-center px-5 text-center text-lg text-slate-500 md:text-2xl">
		Here are all the articles that are tagged with
		<div
			class={`code mx-1 rounded-xl px-1 ${getTagByTitle()?.bgColor} ${getTagByTitle()?.fgColor}`}
		>
			#{getTagByTitle()?.title}
		</div>
	</span>
	<div class="my-10 w-[10%] rounded-xl bg-slate-800 p-1" />
	{#if data.taggedArticles.length === 0}
		<div>No articles found</div>
	{/if}
	<div class="grid grid-cols-1 place-items-center gap-3 md:grid-cols-3">
		{#each data.taggedArticles as article}
			<Article article={article} />
		{/each}
	</div>
</section>
