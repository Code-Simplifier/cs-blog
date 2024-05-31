import FlexSearch from "flexsearch";
import type { Article } from "./types";

let articleIndex: FlexSearch.Index;
let articles: Article[];

type DateStyle = Intl.DateTimeFormatOptions["dateStyle"];

export function formatDate(date: string, dateStyle: DateStyle = "medium", locales = "en") {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export function createArticlesIndex(data: Article[]) {
	articleIndex = new FlexSearch.Index({ tokenize: "forward" });

	data.forEach((article, index) => {
		const item = `${article.slug} ${article.title} ${article.desc} ${article.category} ${article.tags.map((tag) => tag.title).join(" ")}`;
		articleIndex.add(index, item);
	});

	articles = data;
}

export function searchArticleIndex(searchTerm: string) {
	const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const results = articleIndex.search(match);

	return results
		.map((result) => articles[result as number])
		.map(({ slug, title, desc, category, tags }) => {
			return { slug, title, desc, category, tags };
		});
}
