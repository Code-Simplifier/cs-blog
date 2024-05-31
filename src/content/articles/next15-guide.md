---
title: Next15 is here & its faster than ever!
desc: A deep dive into all the new features alongside a new compiler.
date: "2024-5-29"
category: guide
published: true
tags:
  [
    { title: "nextjs", bgColor: "bg-slate-100", fgColor: "text-slate-800" },
    { title: "javascript", bgColor: "bg-yellow-300", fgColor: "text-slate-800" }
  ]
---

<script>
  import Link from "../../components/custom/link.svelte"
  import Headings from "../../components/custom/headings.svelte"
  import CodeSpan from "../../components/custom/codespan.svelte"
  import Warning from "../../components/custom/warning.svelte"
  import Info from "../../components/custom/info.svelte"
  import Summary from "../../components/custom/summary.svelte"
  import TopButton from "../../components/shared/scroll-to-top.svelte"
</script>

<TopButton />
<img src="/src/lib/images/next15-guide/thumbnail.png" class="rounded-2xl border-2 border-light" alt="thumbnail" />

<Headings title="Exploring the New Features of Next.js 15" />

Here is all that you will find in this article as we await the GA of Next.js 15:

- Support for the <Link title="React 19" url="#react19RC" /> RC.
- <CodeSpan title="fetch" /> requests, <CodeSpan title="GET" /> route handlers and <Link url="#caching" title="Caching" />.
- Experimental <Link title="Partial Prehydration" url="#partial-prerendering" />.
- <Link title="New API" url="#next-after" /> to execute code after a response.
- Enable <Link title="Turbopack" url="#turbopack" /> in local development.
- New <Link title="config options" url="#new-config" /> for App/Pages Router.
- <Link title="Summary" url="#summary" /> of the article.


<Headings title="How to try Next.js 15 RC?" />
<div id="react19RC">
You can try the Next.js 15RC by simply running the following command. Read the <Link url="https://rc.nextjs.org/docs" title="documentation" /> to deeply understand all the changes.
</div>

```bash
npm install next@rc react@rc react-dom@rc
```

<Headings title="React19 RC support is now available" />

React 19 Release Candidate (RC) introduces several new features and improvements aimed at enhancing performance, developer experience, and overall application stability. Key updates include concurrent rendering, which allows React to prepare multiple versions of the UI simultaneously, reducing blocking and improving responsiveness. Server components have been refined for better server-side rendering and faster initial loads.
<br />
Next.js 15 RC now supports React 19 RC, which includes new features for both the client and server like Actions.

<Warning>Some third party libraries may not be compatible with React 19 yet.</Warning>

The new <Link url="https://react.dev/learn/react-compiler" title="React Complier" />, currently in its experimental phase, is designed to transform React code into highly optimized JavaScript. This compiler aims to enhance performance by generating more efficient code that can execute faster in the browser. It introduces advanced optimizations such as static extraction of inline styles, automatic batching of updates to minimize re-renders, and precompilation of React components.
<br />
The compiler reduces the amount of manual memoization developers have to do through APIs such as <CodeSpan title="useMemo" /> and <CodeSpan title="useCallback" /> - making code simpler, easier to maintain, and less error prone. Next.js 15 has now added support for the <Link url="https://react.dev/learn/react-compiler" title="React Complier" /> (Experimental).
<br /><br />
To use the new <Link url="https://react.dev/learn/react-compiler" title="React Complier" />, run the following command:

```bash
npm install babel-plugin-react-compiler
```

<br />
Then, open the <CodeSpan title="next.config.ts" /> file and add the <CodeSpan title="experimental.reactCompiler" /> option:

```js
const nextConfig = {
	experimental: {
		reactCompiler: true
	}
};

module.exports = nextConfig;
```

<Info>
Optionally, you can configure the compiler to run in "opt-in" mode as follows:

```ts
const nextConfig = {
	experimental: {
		reactCompiler: {
			compilationMode: "annotation"
		}
	}
};

module.exports = nextConfig;
```

</Info>

<Warning id="caching">The React Compiler is currently only possible to use in Next.js through a Babel plugin, which could result in slower build times.</Warning>

<Headings title="New Caching Defaults after user feedback" />
The Next.js App Router introduced default caching settings intended to offer optimal performance out of the box, with the flexibility to disable them if needed.
<br /> <br />
After considering user feedback, the caching strategies were reassessed, especially regarding their interaction with features like Partial Prerendering (PPR) and third-party libraries that utilize fetch.
<br /> <br />
In Next.js 15, the default behavior for caching fetch requests, GET Route Handlers, and the Client Router Cache will shift from being enabled by default to disabled by default. Users who prefer the previous settings can still choose to enable caching.
<br /> <br />
Ongoing enhancements to caching in Next.js are planned for the upcoming months, with further information to be provided in the general availability announcement for Next.js 15.

- <CodeSpan title="fetch" />requests will now be uncached by default.
- <CodeSpan title="no-store" />: Always retrieve the resource directly from the remote server on each request without updating the cache.
- <CodeSpan title="force-cache" />: Retrieve the resource from the cache if available; otherwise, fetch it from the remote server and update the cache.

```ts
fetch("https://...", {
	cache: "force-cache" | "no-store"
});
```

- <CodeSpan title="GET" />Route Handlers are no longer cached by default.

  - In Next.js 14, Route Handlers employing the <CodeSpan title="GET" /> HTTP method were cached by default, except when employing a dynamic function or dynamic config option. However, in Next.js 15, <CodeSpan title="GET" /> functions will no longer be cached by default.
  - You can still opt into caching using a static route config option such as <CodeSpan title="export dynamic = 'force-static'." />

- The default behavior of the Client Router Cache has been updated, and it no longer caches Page components automatically.

  - To opt back into previous Client Router Cache behavior:

  ```ts
  const nextConfig = {
  	experimental: {
  		staleTimes: {
  			dynamic: 30
  		}
  	}
  };

  module.exports = nextConfig;
  ```

<div id="partial-prerendering">Explore comprehensive insights into caching options available in Next.js 15RC <Link url="https://nextjs.org/blog/next-15-rc#caching-updates" title="here" />.</div>
<br /><br/>

<Headings title="Partial Prerendering" />
Partial prerendering refers to the process of selectively pre-rendering specific parts or sections of a web page, rather than pre-rendering the entire page at once. This approach allows developers to choose which parts of the page should be pre-rendered statically (during build time) and which parts should be rendered dynamically (during runtime).
<br/><br/>
In Next.js, partial prerendering is achieved through features like <CodeSpan title="Incremental Static Regeneration (ISR)" /> and <CodeSpan title="Server-Side Rendering (SSR)" />. ISR allows you to generate and serve static content for certain pages at build time, while still enabling dynamic updates at runtime without rebuilding the entire site. SSR, on the other hand, generates HTML for each request on the server side, ensuring that the content is always up-to-date.
<br/><br/>
By default, Next.js employs static rendering unless dynamic functionalities like <CodeSpan title="cookies()" />, <CodeSpan title="headers()"/> , and uncached data requests are utilized. These APIs transition an entire route into dynamic rendering mode. With Partial Prerendering (PPR), developers can encapsulate any dynamic user interface within a Suspense boundary. When a new request is received, Next.js promptly delivers a static HTML shell, followed by the rendering and streaming of the dynamic components within the same HTTP request.
<br/><br/>

Here is a <Link url="https://www.partialprerendering.com/" title="demo" /> of Partial Prerendering in action:
<div class="flex justify-center my-10">
  <img src="/src/lib/images/next15-guide/rendering.png" class="rounded-2xl border-2 border-light" alt="rendering" />
  <img src="/src/lib/images/next15-guide/rendered.png" class="rounded-2xl border-2 border-light" alt="rendered" />
</div>

Next.js will provide an <CodeSpan title="experimental_ppr" />route config option to use PPR in Layouts & Pages.

```tsx
import { Suspense } from "react"
import { StaticComponent, DynamicComponent } from "@/app/ui"
 
export const experimental_ppr = true
 
export default function Page() {
  return {
     <>
	     <StaticComponent />
	     <Suspense fallback={...}>
		     <DynamicComponent />
	     </Suspense>
     </>
  };
}
```

To use the new option, you’ll need to set the <CodeSpan title="experimental.ppr" /> config in your <CodeSpan title="next.config.js" /> file to <CodeSpan title="'incremental'" />:

```ts
const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
};
 
module.exports = nextConfig;
```
<Warning id="next-after">This feature is currently in an experimental stage, and there may be significant changes before the stable release.</Warning>

<Headings title="Post-Response Code Execution with Next/After" />
During the handling of user requests, servers often undertake tasks directly tied to generating the response. Yet, there are times when additional tasks, like logging, analytics, and external system synchronizations, are necessary.
<br/><br/>
However, these tasks aren't crucial to the immediate response and shouldn't delay the user's experience. The challenge arises when attempting to defer such tasks after responding, especially in serverless environments where computations halt immediately after closing the response.
<br/><br/>
The introduction of <CodeSpan title="after()" />, an experimental API, aims to tackle this issue. It allows developers to schedule tasks for execution after the response has completed streaming, facilitating the execution of secondary tasks without hindering the primary response flow.
<br/><br/>
To use <CodeSpan title="next.after" />, add <CodeSpan title="experimental.after" /> to <CodeSpan title="next.config.js" />:

```js
const nextConfig = {
  experimental: {
    after: true,
  },
};
 
module.exports = nextConfig;
```

Then, import the function in Server Components, Server Actions, Route Handlers, or Middleware.

```ts
import { unstable_after as after } from 'next/server';
import { log } from '@/app/utils';
 
export default function Layout({ children }) {
  // Secondary task
  after(() => {
    log();
  });
 
  // Primary task
  return <>{children}</>;
}
```
<Warning id="turbopack">This feature is currently in an experimental stage, and there may be significant changes before the stable release.</Warning>

<Headings title="compile with turbopack in next.js" />
Next.js 15 now comes with a new facelift, with a revamped and modernized default App UI that boasts a fresh and visually appealing appearance.

<img src="/src/lib/images/next15-guide/next-ui.avif" alt="next-ui" class="my-10 border border-light rounded-2xl" />

<Link title="Turbopack" url="https://turbo.build/" /> stands as an incremental bundler tailored for JavaScript and TypeScript, crafted in Rust by the innovative minds behind webpack and Next.js at <Link title="Vercel" url="https://vercel.com" />.
<br /><br />
Its exceptional performance is attributed to two key factors: finely tuned machine code and a sophisticated low-level incremental computation engine. This combination enables caching down to the granularity of individual functions, ensuring that once Turbopack completes a task, it never repeats it again.
<br /><br/>
When using <CodeSpan title="create-next-app" />, a new prompt will appear, giving you the option to enable <CodeSpan title="Turbopack" /> for local development.

```text
✔ Would you like to use Turbopack for next dev? … No / Yes
```

The new <CodeSpan id="new-config" title="--turbo" /> flag can also be used to enable <CodeSpan title="Turbopack" />
```shell
npx create-next-app@rc --turbo
```

<Headings title="Optimizing bundling of external packages" />
The process of bundling external packages can greatly enhance the cold start performance of an application. In the App Router, external packages are bundled by default, with the ability to exclude specific packages using the new <CodeSpan title="serverExternalPackages" /> configuration option.
<br /><br/>
In contrast, the Pages Router does not bundle external packages by default. However, developers can specify a list of packages to bundle using the existing <CodeSpan title="transpilePackages" /> option. This approach requires manual specification of each package.
<br /><br/>
To standardize configuration across both the App and Pages Router, a new option called <CodeSpan title="bundlePagesRouterDependencies" /> is being introduced. This option mirrors the default automatic bundling behavior of the App Router. Developers can then utilize <CodeSpan title="serverExternalPackages" /> to exclude specific packages as needed.

```ts
const nextConfig = {
  // Automatically bundle external packages in the Pages Router:
  bundlePagesRouterDependencies: true,
  // Opt specific packages out of bundling for both App and Pages Router:
  serverExternalPackages: ['package-name'],
};
 
module.exports = nextConfig;
```

The complete log of all <CodeSpan id="summary" title="Breaking" /> and <CodeSpan title="Improvements" /> can be found on the official <Link title="Next.js 15RC" url="https://nextjs.org/blog/next-15-rc#optimizing-bundling-of-external-packages-stable" /> docs.
<br /><br /><br />

<Summary>The Next.js 15 Release Candidate (RC) introduces several updates and improvements. It features a new Next.js Compiler, designed to optimize React code for enhanced performance. The App Router now defaults to uncached behavior for fetch requests, GET Route Handlers, and Client Router Cache, with options to opt into caching. Additionally, the Client Router Cache no longer caches Page components by default. Next.js 15 also enhances partial prerendering capabilities, allowing developers to selectively prerender specific parts of a web page. The release includes experimental features such as next/after for executing code post-response and improvements to caching options. The update strives to offer a smoother developer experience, better performance, and more flexibility in handling dynamic content and caching in Next.js applications.</Summary>