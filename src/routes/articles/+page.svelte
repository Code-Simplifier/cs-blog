<script>
	export let data;
	import Article from "../../components/shared/article.svelte";
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
		{#each data.articles as { title, slug, desc, tags, thumbnail }}
			<Article article={{ title, slug, desc, tags, thumbnail }} />
		{/each}
	</div>
</section>


