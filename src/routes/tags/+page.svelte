<script>
	import { tags } from "../../content/tags/tags";
</script>


<svelte:head>
	<title>Tags</title>
</svelte:head>

<section class="flex flex-col items-center justify-center pt-44">
	<h1 class="title-bold my-2 text-6xl">Tags</h1>
	<span class="content text-center text-2xl text-slate-500">
		Search by Tags to Find Articles Matching Your Interests.
	</span>
	<div class="my-10 w-[10%] rounded-xl bg-slate-800 p-1" />
	<div class="grid grid-cols-4 gap-3 place-items-center">
		{#each tags as tag}
			<div class={`code px-2 w-fit rounded-xl font-bold ${tag.bgColor} ${tag.fgColor}`}>#{tag.title}</div>
		{/each}
	</div>
</section>
<article></article>