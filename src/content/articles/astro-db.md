---
title: AstroDB is super easy to setup!
desc: Learn the ways of Astro's libSQL based database along with Astro Studio.
date: "2024-5-31"
thumbnail: "/images/astro-db/thumbnail.png"
category: overview
published: true
tags:
  [
    {
      title: "astro",
      bgColor: "bg-gradient-to-r from-slate-200 to-red-300",
      fgColor: "text-slate-800"
    },
    { title: "database", bgColor: "bg-slate-600", fgColor: "text-slate-200" }
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
  import Error from "../../components/custom/error.svelte"
  import TopButton from "../../components/shared/scroll-to-top.svelte"
</script>

<TopButton />

<Headings title="Astro now has its own database" />

Few months back, Astro launched its own database based on <Link title="Turso" url="https://turso.tech/" />. Here is all that you need to know to get going:

- Why use <Link title="libSQL" url="#libsql" /> over SQLite?
- Suprising fair <Link title="Pricing" url="#pricing" />.
- Getting started with <Link title="AstroDB" url="#astrodb" />.
- <Link url="#summary" title="Summary" /> of the article.

<Headings title="initializing astro app" />

To follow along this article, you will need to install and create an **Astro** app.

```shell
npm create astro@latest astro-db-test
```

While configuration should not matter, here is the one I prefer:

```text
astro - Launch sequence initiated.
    ◼  dir Using astro-db-test as project directory

tmpl  - How would you like to start your new project?
    ◼  Empty

ts    - Do you plan to write TypeScript?
    ◼  Yes

use   - How strict should TypeScript be?
    ◼  Strict

deps  - Install dependencies?
    ◼  Yes

git   - Initialize a new git repository?
    ◼  No

Sounds good! You can always run git init manually.
```

<div id="libsql">
Open the directory in your preferred editor and lets start working!
</div>

```bash
cd astro-db-test && code .
```

<Headings title="What is libSQL and why did Astro choose it?" />

<Link url="https://turso.tech/libsql" title="libSQL" /> is an open-source, SQL database library designed to provide a lightweight and efficient database management system. It offers a simple, easy-to-integrate solution for applications requiring SQL capabilities. 
<br /><br />

It focuses on _high performance, reliability,_ and _flexibility_, making it suitable for embedded systems, mobile applications, and other environments where a full-fledged database server might be overkill. It is typically written in **C or C++** and supports standard SQL queries, transactions, and various indexing options to optimize data retrieval.
<br />

On the other hand, <Link title="SQLite" url="https://www.sqlite.org/" /> is a **C library**, so it needs native add-ons to run in **Node.JS**. This is ok for **local development**, but native add-ons are difficult to deploy to serverless hosts and the startup time was _worrisome_. Additionally, key environments like <Link title="Stackblitz" url="https://stackblitz.com/" /> would fail to run it entirely.
<br />

libSQL is a **fork of SQLite** that introduces a collection of improvements to the runtime while maintaining compatibility with classic SQLite. It features a modern database client for _JavaScript/TypeScript_ that avoided the native bindings and compilation steps that plagued the rest of the ecosystem. It could even run on <Link title="Stackblitz" url="https://stackblitz.com/" /> via WASM.
<br />

And with <Link id="pricing" title="Turso" url="https://turso.tech/" /> hosting their **libSQL Databases**, all piece were now in place for Astro to launch its very own database!

<Headings title="use Astrodb for free (No Credit Card!)" />

Astro offers a generous free tier for its database alongside a pay-to-as-go technique for its paid tier.

<div class="my-10">

![pricing](/images/astro-db/pricing.png)

</div>

<Headings title="getting started with astrodb"  id="astrodb" />

Start by installing <CodeSpan title="astro-db" /> from the following command:

```shell
npx astro add db
```

<Info>You can also install it <Link title="manually" url="https://docs.astro.build/en/guides/integrations-guide/db/#manual-installation" /> if you prefer it that way</Info>

This will create a <CodeSpan title="db" /> folder in you app directory. Inside you will find a **seed.ts** and a **config.ts**. The **config.ts** file is used to define tables for your database and **seed.ts** i used to insert values into those tables.
<br />

Lets create a simple table. Open your **config.ts** file and import <CodeSpan title="defineTable" /> aswell as <CodeSpan title="column" /> from <CodeSpan title="astro:db" />.

```ts
import { defineTable, column } from "astro:db";
```

Now create a table called _Article_.

```ts
const Article = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text()
	}
});
```

<Info>

As of now, there are only 5 datatypes supported by AstroDB:
<CodeSpan title="column.text()" />, <CodeSpan title="column.number()" />, <CodeSpan title="column.date()" />, <CodeSpan title="column.boolean()" />, <CodeSpan title="column.json()" />.

</Info>

To add a table into <CodeSpan title="astro:db" />, we need to define it using <CodeSpan title="defineDb" />.

```ts
export default defineDb({
	tables: { Comment }
});
```

Now we need to seed our tables inside the <CodeSpan title="seed.ts" /> file.

```ts
import { db, Article } from "astro:db";

export default async function () {
	await db.insert(Article).values([
		{ id: 1, title: "This is a good title!" },
		{ id: 2, title: "AstroDB is super cool!" }
	]);
}
```

<Error>

In many cases, you likely to find that the table you have created is not recognized when you import it inside **seed.ts** from <CodeSpan title="astro:db" />. This is likely a _Typescript_ error and can be solved by either adding a _//@ts-ignore_ on top of the file or tweaking the strictness inside **ts.config.json**.

</Error>

<Headings title="Query your database" />

AstroDB has a built-in <Link title="Drizzle ORM" url="https://orm.drizzle.team/" /> client. It uses your exact database schema definition for **type-safe SQL** queries with **TypeScript** errors when you reference a column or table that doesn’t exist.
<br />

To use the <CodeSpan title="SELECT" /> query, go inside your <CodeSpan title="src/pages/index.astro" /> file and import your tables in the _frontmatter_.

```ts
---
import { db, Article } from 'astro:db';

const articles = await db.select().from(Article);
---
```

Next up, we can use logic blocks to query and render all items of the the **Article** table.

```jsx
{
	articles.map(({ id, title }) => (
		<article>
			<p>Id: {id}</p>
			<p>Title: {title}</p>
		</article>
	));
}
```

<Success id="summary">

Oh yeah, its just that simple! All you need are **two** files to create and insert values into you database and its ready to be used. _AstroDB_ has to tbe easiest to setup **SQL-based** database by a mile. To learn more about methods of querying, you can visit the official <Link title="documentation" url="https://docs.astro.build/en/guides/astro-db/" /> here.

</Success>

<Summary>

AstroDB, built on the libSQL library, is a simple and efficient database for Astro applications. Unlike SQLite, which requires native add-ons and faces deployment issues, libSQL uses a JavaScript/TypeScript client and WebAssembly support, making it ideal for environments like Stackblitz. AstroDB offers high performance and reliability, suitable for embedded systems and mobile apps. Setting it up involves creating an Astro app, installing AstroDB, and defining tables and seed data. It includes a built-in Drizzle ORM for type-safe SQL queries. AstroDB is easy to configure and offers a free tier with pay-as-you-go pricing, making it both accessible and cost-effective. For more details, refer to the official AstroDB documentation. Overall, AstroDB’s simplicity and robust features make it an excellent database choice for developers.

</Summary>
