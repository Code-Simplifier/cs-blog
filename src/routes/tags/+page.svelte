<script>
	import { tags } from "../../content/tags/tags";
</script>

<svelte:head>
	<title>CS - Tags</title>
</svelte:head>

<section class="flex flex-col items-center justify-center pt-44">
	<h1 class="title-bold my-2 text-6xl">Tags</h1>
	<span class="content text-center text-2xl text-slate-500">
		Search by Tags to Find Articles Matching Your Interests.
	</span>
	<div class="my-10 w-[10%] rounded-xl bg-slate-800 p-1" />
	<div class="grid grid-cols-2 gap-3 md:grid-cols-4">
		{#each tags as tag}
			<a
				href="/tags/{tag.title}"
				class={`code rounded-xl p-2 text-center text-lg transition-all duration-200 hover:scale-110 ${tag.bgColor} ${tag.fgColor}`}
			>
				#{tag.title}
			</a>
		{/each}
	</div>
</section>
<article></article>
