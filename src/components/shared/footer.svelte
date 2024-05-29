<script>
	import LogoIcon from "../icons/LogoIcon.svelte";
</script>

<footer
	class="flex mt-72 md:mt-36 flex-col items-center justify-center border-4 border-slate-600/50 text-slate-600 border-dashed"
>
	<div
		class="flex flex-col text-xl md:flex-row mt-10 space-y-2 md:space-y-0 md:space-x-5 items-center justify-center w-full"
	>
		<p class="title-bold tracking-wide hover:text-primary transition-all duration-200 cursor-pointer uppercase">
			search
		</p>
		<p class="title-bold tracking-wide hover:text-primary transition-all duration-200 cursor-pointer uppercase">
			tags
		</p>
		<p class="title-bold tracking-wide hover:text-primary transition-all duration-200 cursor-pointer uppercase">
			articles
		</p>
		<p class="title-bold tracking-wide hover:text-primary transition-all duration-200 cursor-pointer uppercase">
			news
		</p>
		<p class="title-bold tracking-wide hover:text-primary transition-all duration-200 cursor-pointer uppercase">
			settings
		</p>
	</div>
	<div class="text-primary my-6">
		<LogoIcon width="400" height="400" />
	</div>
	<div class="text-lg uppercase flex mb-5 mx-10 items-center text-center">
		&copy
		<p class="tracking-widest code mx-2"> 2024 CodeSimplified. all rights reserved.</p>
	</div>
</footer>
