<script>
	import Codespan from "../../components/custom/codespan.svelte";
</script>

<section class="flex flex-col items-center justify-center pt-44">
	<h1 class="title-bold my-2 text-xl md:text-6xl">Commands</h1>
	<p class="content my-2 px-5 text-center text-lg text-slate-500 md:text-2xl">
		Essential Keyboard Shortcuts for Effortless Navigation
	</p>
	<div class="my-10 w-[10%] rounded-xl bg-slate-800 p-1" />
	<div class="flex w-[90%] flex-col items-center justify-center gap-y-3 md:w-[50%]">
		<div class="flex w-full items-center justify-between rounded-xl bg-secondary/50 p-3 text-xl">
			<span class="content-bold uppercase tracking-wider">Search page</span>
			<Codespan title="⌘ + K" />
		</div>
		<div class="flex w-full items-center justify-between rounded-xl bg-secondary/50 p-3 text-xl">
			<span class="content-bold uppercase tracking-wider">Tags page</span>
			<Codespan title="⌘ + M" />
		</div>
		<div class="flex w-full items-center justify-between rounded-xl bg-secondary/50 p-3 text-xl">
			<span class="content-bold uppercase tracking-wider">Articles page</span>
			<Codespan title="⌘ + U" />
		</div>
        <div class="flex w-full items-center justify-between rounded-xl bg-secondary/50 p-3 text-xl">
			<span class="content-bold uppercase tracking-wider">Copy page url</span>
			<Codespan title="⌘ + L" />
		</div> 
		<div class="flex w-full items-center justify-between rounded-xl bg-secondary/50 p-3 text-xl">
			<span class="content-bold uppercase tracking-wider">Previous page</span>
			<Codespan title="⌘ + [" />
		</div>
		<div class="flex w-full items-center justify-between rounded-xl bg-secondary/50 p-3 text-xl">
			<span class="content-bold uppercase tracking-wider">Next page</span>
			<Codespan title="⌘ + ]" />
		</div>
		
	</div>
</section>
