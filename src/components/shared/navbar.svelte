<script lang="ts">
	import SearchIcon from "../icons/SearchIcon.svelte";
	import TagsIcon from "../icons/TagsIcon.svelte";
	import BlogIcon from "../icons/BlogIcon.svelte";
	import NewsIcon from "../icons/NewsIcon.svelte";
	import SettingsIcon from "../icons/SettingsIcon.svelte";
	import LogoIcon from "../icons/LogoIcon.svelte";
</script>

<nav class="w-full absolute p-5 md:p-10 z-10 mb-0">
	<!-- MD/XL SCREEN NAVBAR -->
	<div class="hidden md:flex items-center justify-between">
		<a href="/" class="text-primary">
			<LogoIcon />
		</a>
		<div class="flex gap-x-16">
			<a
				href="#"
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
			<a
				href="#"
				class="hover:bg-slate-600/50 p-2 rounded-lg transition-all duration-200 hover:text-white"
			>
				<NewsIcon />
			</a>
			<a
				href="#"
				class="hover:bg-slate-600/50 p-2 rounded-lg transition-all duration-200 hover:text-white"
			>
				<SettingsIcon />
			</a>
		</div>
	</div>

	<!-- SM SCREEN NAVBAR -->
	<div class="flex flex-col gap-y-10 items-center justify-center md:hidden">
		<div class="text-primary">
			<LogoIcon />
		</div>
		<div class="flex gap-x-16 ">
			<SearchIcon />
			<TagsIcon />
			<BlogIcon />
			<NewsIcon />
			<SettingsIcon />
		</div>
	</div>
</nav>
