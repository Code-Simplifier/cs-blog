<script lang="ts">
	import type { Tags } from "$lib/types";

	export let article: {
		slug: string;
		title: string;
		desc: string;
		tags: Tags[];
		thumbnail: string;
	};
</script>

<a href={`/articles/${article.slug}`}>
	<article
		class="relative h-[450px] w-[350px] rounded-2xl bg-secondary duration-200 hover:mx-5 hover:my-3 hover:scale-105 hover:border-2 hover:border-slate-500"
	>
		<img src={article.thumbnail} alt={article.title} class="rounded-t-2xl" />

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
	</article>
</a>
