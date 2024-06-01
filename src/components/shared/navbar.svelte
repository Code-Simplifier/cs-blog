<script lang="ts">
	import SearchIcon from "../icons/SearchIcon.svelte";
	import TagsIcon from "../icons/TagsIcon.svelte";
	import BlogIcon from "../icons/BlogIcon.svelte";
	import LogoIcon from "../icons/LogoIcon.svelte";
</script>

<nav class="w-full absolute p-5 md:p-0 z-10 mb-0">
	<!-- MD/XL SCREEN NAVBAR -->
	<div class="hidden md:flex fixed w-full py-10 px-10 items-center justify-between backdrop-blur-md">
		<a href="/" class="text-primary">
			<LogoIcon />
		</a>
		<div class="flex gap-x-16">
			<a
				href="/search"
				class="hover:bg-slate-600/50 p-2 rounded-lg transition-all duration-200 hover:text-white"
			>
				<SearchIcon />
			</a>
			<a
				href="/tags"
				class="hover:bg-slate-600/50 p-2 rounded-lg transition-all duration-200 hover:text-white"
			>
				<TagsIcon />
			</a>
			<a
				href="/articles"
				class="hover:bg-slate-600/50 p-2 rounded-lg transition-all duration-200 hover:text-white"
			>
				<BlogIcon />
			</a>
		</div>
	</div>

	<!-- SM SCREEN NAVBAR -->
	<div class="flex flex-col gap-y-10 items-center justify-center md:hidden">
		<div class="text-primary">
			<LogoIcon />
		</div>
		<div class="flex gap-x-14">
			<a href="/search">
				<SearchIcon />
			</a>
			<a href="/tags">
				<TagsIcon />
			</a>
			<a href="/articles">
				<BlogIcon />
			</a>
		</div>
	</div>
</nav>
