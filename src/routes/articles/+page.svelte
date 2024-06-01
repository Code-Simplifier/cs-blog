<script>
	export let data;
</script>

<svelte:head>
	<title>CS - Articles</title>
</svelte:head>

<section class="flex flex-col items-center pt-44">
	<h1 class="title-bold my-2 text-2xl md:text-6xl">Articles</h1>
	<span class="content px-5 text-center text-lg text-slate-500 md:text-2xl">
		Explore insightful articles on coding best practices to elevate your skills.
	</span>
	<div class="my-10 w-[10%] rounded-xl bg-slate-800 p-1" />
	<div class="grid grid-cols-1 place-items-center gap-3 md:grid-cols-3">
		{#each data.articles as article}
			<a href={`/articles/${article.slug}`} target="_blank">
				<div
					class="relative h-[400px] w-[350px] rounded-2xl bg-secondary duration-200 hover:mx-5 hover:my-3 hover:scale-105 hover:border-2 hover:border-slate-500"
				>
					<div
						class="code flex items-center justify-between p-3 font-bold uppercase text-slate-500"
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
</section>
