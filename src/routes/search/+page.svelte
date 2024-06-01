<script lang="ts">
	import { onMount } from "svelte";
	import { createArticlesIndex, searchArticleIndex } from "$lib/utils";

	import type { Article } from "$lib/types";

	let search: "loading" | "ready" = "loading";
	let searchItem = "";
	let results: Article[] = [];

	onMount(async () => {
		const articles = await fetch("/api/articles").then((res) => res.json());
		createArticlesIndex(articles);
		search = "ready";
	});

	$: if (search === "ready") {
		results = searchArticleIndex(searchItem) as Article[];
	}
</script>

<svelte:head>
	<title>CS - Search</title>
</svelte:head>

{#if search === "ready"}
	<seciton class="h-screen flex flex-col items-center justify-center">
		<input
			bind:value={searchItem}
			type="search"
			autocomplete="off"
			spellcheck="false"
			placeholder="Search by title, category, or tag..."
			class="w-[90%] rounded-xl title-semi border-2 border-slate-500 bg-secondary p-3 text-xl text-primary placeholder-slate-500 focus:outline-none md:w-[60%]"
		/>

		<div class="mt-10 grid grid-cols-1 place-items-center gap-3 md:grid-cols-3">
			{#each results as article}
				<a href={`/articles/${article.slug}`} target="_blank">
					<div
						class="relative h-[400px] w-[350px] rounded-2xl bg-secondary duration-200 hover:mx-5 hover:my-3 hover:scale-105 hover:border-2 hover:border-primary"
					>
						<div
							class="code flex items-center justify-between p-3 font-bold uppercase text-slate-700"
						>
							<span>category</span>
							<span class="transition-all duration-200 hover:text-primary hover:underline"
								>{article.category}</span
							>
						</div>
						<div class="flex w-[90%] flex-col justify-between p-4">
							<div class="flex flex-col gap-y-3">
								<h1 class="title-semi text-2xl uppercase tracking-wide text-primary">
									{article.title}
								</h1>
								<span>{article.desc}</span>
							</div>
							<div class="absolute bottom-3 flex gap-x-2">
								{#each article.tags as tag}
									<div class={`code rounded-xl px-2 ${tag.bgColor} ${tag.fgColor}`}>
										#{tag.title}
									</div>
								{/each}
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</seciton>
{/if}
