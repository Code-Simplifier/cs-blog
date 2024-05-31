import type { Article } from "$lib/types.js";

export async function load({ params, fetch }) {
	const response = await fetch("/api/articles");
	const articles: Article[] = await response.json();

	let taggedArticles: Article[] = [];

	articles.forEach((article) => {
		if (article.tags.some((tag) => tag.title === params.slug)) {
			taggedArticles.push(article);
		}
	});
	return { taggedArticles, title: params.slug };
}
