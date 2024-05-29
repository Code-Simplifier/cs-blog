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
