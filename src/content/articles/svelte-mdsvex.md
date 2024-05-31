---
title: Use Markdown in Svelte with mdsvex
desc: Guide on how to setup mdsvex in SvelteKit 3.0 to use .md/.svx for your blog.
date: "2024-5-30"
category: tutorial
published: true
tags:
  [
    { title: "svelte", bgColor: "bg-red-400", fgColor: "text-slate-800" },
    { title: "markdown", bgColor: "bg-yellow-400", fgColor: "text-slate-800" }
  ]
---

<script>
  import Link from "../../components/custom/link.svelte"
  import Headings from "../../components/custom/headings.svelte"
  import CodeSpan from "../../components/custom/codespan.svelte"
  import Warning from "../../components/custom/warning.svelte"
  import Success from "../../components/custom/success.svelte"
  import Info from "../../components/custom/info.svelte"
  import Summary from "../../components/custom/summary.svelte"
  import TopButton from "../../components/shared/scroll-to-top.svelte"
</script>

<TopButton />
<img src="/src/lib/images/svelte-mdsvex/thumbnail.png" class="rounded-2xl border-2 border-light" />

<Headings title="working with markdown files in Svelte" />

This article is a basic overview of using markdown in Svelte. Here is what you will learn:

- Preprocessors in <Link url="#svelte" title="Svelte" />.
- <Link url="#mdsvex" title="MDSveX" /> and how to install.
- Loading <Link url="#markdown" title="markdown" /> files using API.
- Custom <Link url="#svelte-comp" title="Svelte Components" /> in markdown.
- Syntax highlighting using <Link url="#prism" title="Prism.js" />
- <Link url="#summary" title="Summary" /> of the article.

<Headings title="Installing Dependencies" />
To follow along this article, you will need to install and create a svelte app.

```shell
npm create svelte@latest svelte-mdsvex
```

I will be using typscript alongside for type-safety and code auto-completion but its completely optional:

```text
┌  Welcome to SvelteKit!
│
◇  Which Svelte app template?
│  Skeleton project
│
◇  Add type checking with TypeScript?
│  Yes, using TypeScript syntax
│
◇  Select additional options (use arrow keys/space bar)
│  Add ESLint for code linting, Add Prettier for code formatting
│
└  Your project is ready!
```

After this change into this directory and run <CodeSpan title="npm install" /> to complete the setup:

```shell
cd svelte-mdsvex && npm install
```

Then install <CodeSpan id="svelte" title="mdsvex" /> as a dev dependency and you are good to go!

```shell
npm install -D mdsvex
```

<Headings title="What are Preprocessors anyway?" />
In Svelte, preprocessors are tools or plugins that transform your source code before Svelte itself processes it. They can be used to handle different file types, syntax extensions, or code transformations. Common uses of preprocessors include:

- <CodeSpan title="TypeScript" />: Transpiling TypeScript into JavaScript.
- <CodeSpan title="SCSS/SASS" />: Compiling SCSS/SASS into CSS.
- <CodeSpan title="Markdown" />: Converting Markdown files into HTML.
- <CodeSpan id="mdsvex" title="PostCSS" />: Applying various CSS transformations.

By using preprocessors, we can integrate additional languages and tools into their Svelte projects, enhancing the development workflow and enabling more flexible code management.
<br /><br />

<Headings title="Mdsvex setup in SvelteKit" />
Open you <CodeSpan title="svelte.config.js" /> file and import <CodeSpan title="mdsvex" />:

```js
import { mdsvex } from "mdsvex";
```

The <CodeSpan title="mdsvexOptions" /> arguments tells the preprocessor to process files of a given extention. There are many plugins you can use such as <Link title="MDX" /> or <Link url="https://markdoc.dev/" title="MarkDoc" /> which use <CodeSpan title=".mdx" /> and <CodeSpan title=".markdoc" />. Hence we need to pass the extentions we will be writing our markdown content in:

```js
/** @type { import("mdsvex").MdsvexOptions } */
const mdsvexOptions = {
	extensions: [".md"]
};
```

Finally we need the add <CodeSpan title="mdsvex(mdsvexOptions)" /> into the <CodeSpan title="preprocessors"  /> list. We also need svelte to allow <CodeSpan title=".md" /> files as routes:

```js
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	extensions: [".svelte", ".md"]
};
```

So your final <CodeSpan title="svelte.config.js"/> file should look similar to this:

```ts
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type { import("mdsvex").MdsvexOptions } */
const mdsvexOptions = {
	extensions: [".md"]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	extensions: [".svelte", ".md"],
	kit: {
		adapter: adapter()
	}
};

export default config;
```

Believe it or not, thats all the setup you need to use _**mdsvex**_ as a preprocessor. You can now directly create <CodeSpan title="+page.md" /> files in the <CodeSpan title="src/routes" /> folder and see the content rendered on the browser.

<Headings title="Creating an API Endpoint for all markdown content" />

Well to use markdown the _**proper**_ way, lets create a **content** folder in the **src** directory. You can do that either using your code editor or from the _terminal_ itself using the following command:

```shell
cd src && mkdir content
```

Now move all the your markdown files into that folder and lets begin creating our api endpoint.

<Info>

If you are using **TypeScript** just like me, then inside the <CodeSpan title="src/lib" /> folder, create a <CodeSpan title="types.ts" /> file and add in the following types:

```ts
export type Tags = {
	title: string;
	bgColor: string;
	fgColor: string;
};

export type Article = {
	title: string;
	slug: string;
	thumbnail: string;
	category: string;
	desc: string;
	date: string;
	published: boolean;
	tags: Tags[];
};
```

</Info>

Inside the <CodeSpan title="src/routes" /> directory, create a folder calling _**api**_ and inside that folder, create a **+server.ts** file. This will server as our **API Endpoint**.

```bash
cd src/routes && mkdir api
touch +server.ts
```

Here is a demo article content:

````md
---
title: This is a great title!!
desc: Small description of the article
date: "2024-5-30"
category: tutorial
published: true
tags:
[
    { title: "svelte", bgColor: "bg-red-400", fgColor: "text-slate-800" },
    { title: "markdown", bgColor: "bg-yellow-400", fgColor: "text-slate-800" }
]
---

## This is coool!!!

- lists
- are
- super
- fun

```ts
function sayHello() {
	console.log("Hello World");
}
```
````

Open the **+server.ts** file in your code editor and make the required imports:

```ts
import type { Article } from "$lib/types"; // TYPESCRIPT ONLY
import { json } from "@sveltejs/kit";
```

Now we can start building our <CodeSpan title="getArticles()" /> function. This function will return a list of all files in our <CodeSpan title="src/content" /> folder.

```ts
async function getArticles() {
	let articles: Article[] = [];

	return articles;
}
```

First of all, we need to specify the paths to our markdown files. SvelteKit uses <Link url="https://vitejs.dev/" title="Vite" /> as a building tool, hence we can use <CodeSpan title="import.meta.glob()" /> to import all files from a certain directory.

```ts
const paths = import.meta.glob("/src/content/articles/*.md");
```

However, the current **paths** is not a useful piece data. To get the _default_ and as well as the _content_ we need to make the following adjustments:

```ts
const paths = import.meta.glob("/src/content/articles/*.md", { eager: true });
```

Now if you <CodeSpan title="console.log(paths)" />, you see something similar to this being logged on your terminal:

```bash
{
  '/src/content/article-1.md': {
    default: { render: [Function: render], '$$render': [Function: $$render] },
    [Symbol(Symbol.toStringTag)]: 'Module'
  }
}
```

We can now query all file **paths** from _paths_. Alongside that, we will need to create a **slug** for each invidiual file using the name of the file. This is is best approach as **slug** is not passed from the **frontmatter** and files names are usually short and concise. In our demo e.g. , the **slug** for the <CodeSpan title="src/content/article-1.md" /> file should be **article-1**. We can remove the unwanted part using the following <CodeSpan title="string" /> functions:

```ts
for (const path in paths) {
	const file = paths[path];
	const slug = path.split("/").at(-1)?.replace(".md", "");
}
```

Now to add items to our <CodeSpan title="articles" /> array, we can get the metadata from the <CodeSpan title="file" /> variable after which we can spread it, combine it with our slug and use the <CodeSpan title="push" /> function to add it into our array.

```ts
const metadata = file.metadata;
const article = { ...metadata, slug };

article.published && articles.push(article);
```

<Warning>

For **Typescript** users, the above code would look something along the lines of this:

```ts
if (file && typeof file === "object" && "metadata" in file && slug) {
	const metadata = file.metadata as Omit<Article, "slug">;
	const article = { ...metadata, slug } satisfies Article;

	article.published && articles.push(article);
}
```

</Warning>

<Info>

Additionally, if you want to sort all your articles by date such that the lastest article appears first, you can use the <CodeSpan title="sort" /> function to achieve it.

```ts
articles = articles.sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime());
```

</Info>

Finally lets export you <CodeSpan title="getArticles()" /> and return it in a JSON format.

```ts
export async function GET() {
	const articles = await getArticles();
	return json(articles);
}
```

<Success>

Thats it! You api should be ready and working. If you to the <CodeSpan title="localhost:5173/api" />, you should see all your articles displayed in a JSON format.

</Success>

<Headings title="Rendering articles using LOAD function" />

To display all articles, you can create an **articles** folder inside <CodeSpan title="src/routes" /> directory. While there, add two more files <CodeSpan title="+page.ts" /> and <CodeSpan title="+page.svelte" /> to load and render data respectively.

```shell
cd src/routes/articles
touch +page.ts
touch +server.ts
```

We can use the SvelteKit's built-in _**load**_ and _**fetch**_ inside the <CodeSpan title="+page.ts" /> file to get the data from our <CodeSpan title="src/api" /> endpoint.

```ts
import type { Article } from "$lib/types"; // TYPESCRIPT ONLY

export async function load({ fetch }) {
	const response = await fetch("/api");
	const articles: Article[] = await response.json();

	return { articles };
}
```

Now to render the data, open +page.svelte and export the <CodeSpan title="data" /> variable in the <CodeSpan title="<script>" /> tag.

```svelte
<script>
	export let data;
</script>
```

Now you have access to all the frontmatter in the markdown file which can be rendered dynamically using Svelte's <CodeSpan title="#each" /> logic tag.

```svelte
<div>
	{#each data.articles as article}
		<a href={`/articles/${article.slug}`} target="_blank">
			<div>
				<span>{article.category}</span>
				<h1>{article.title}</h1>

				<span>{article.desc}</span>

				{#each article.tags as tag}
					<div>#{tag.title}</div>
				{/each}
			</div>
		</a>
	{/each}
</div>
```

Inside <CodeSpan title="src/routes/articles" /> create a dynamic folder <CodeSpan title="[slug]" />. This will be used to render the content of each post. Again, inside the <CodeSpan title="[slug]" /> folder, create two files <CodeSpan title="+page.ts" /> and <CodeSpan title="+page.svelte" />.
<br />

We can use the same technique as before to get the content of the article as we did for the frontmatter. All we need the **URL** from the browser which can be imported using the _**params**_ argument.

```ts
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	try {
		const post = await import(`../../../content/${params.slug}.md`);
		return {
			content: post.default,
			metadata: post.metadata
		};
	} catch (e) {
		throw error(404);
	}
}
```

Now back in the <CodeSpan title="+page.svelte" />, we can use <CodeSpan title="data.metadata" /> for the frontmatter and <CodeSpan title="data.content" /> for the article's content.

```svelte
<script lang="ts">
	export let data;
</script>

<article>
	<span>{data.metadata.title}</span>
	<span>
		Updated On {data.metadata.date}
	</span>
	<div>
		{#each data.metadata.tags as tag}
			<div>#{tag.title}</div>
		{/each}
	</div>
	<div>
		<svelte:component this={data.content} />
	</div>
</article>
```

<Success id="prism">

And boom! Just like that, you now use markdown files in Svelte using the MDSveX preprocessor. For simplicity sake, I have not added any form of styling to the components hence you can add your own styling as you wish. Popular styling options include <Link title="Open Props" url="https://open-props.style/" />, <Link url="https://tailwindcss.com/docs/guides/sveltekit" title="Tailwind" /> etc.

</Success>

<Headings title="Syntax highlighting with prism" />

Prism.js is a _lightweight_, extensible syntax **highlighter** for code. It supports a wide range of programming languages and can be easily customized through plugins and themes. Prism.js is often used in web applications and documentation to enhance the readability and presentation of code snippets.
<br/>
All you need to do is choose a theme from all the available <Link url="https://github.com/PrismJS/prism-themes" title="options" /> and add them to your <CodeSpan title="app.css"/> file. Then you can import it inside your <CodeSpan title="+layout.svelte"/> file.

<Summary>

This tutorial guides you through integrating mdsvex with SvelteKit 3.0 to use Markdown files for blogging. It begins with setting up a Svelte app and installing necessary dependencies. The core configuration involves modifying svelte.config.js to include mdsvex as a preprocessor, allowing Markdown files to be used as routes. The tutorial covers creating an API endpoint to manage Markdown content, structuring the content folder, and using the import.meta.glob method to handle file paths and metadata. Additionally, it explains setting up a dynamic routing system for individual articles, rendering article lists and their contents, and incorporating syntax highlighting with Prism.js for better code readability. This setup enhances the Svelte development workflow, enabling the seamless integration of Markdown for content management.

</Summary>
