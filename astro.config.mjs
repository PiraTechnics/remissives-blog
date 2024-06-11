import { defineConfig } from "astro/config";
import DecapCMS from "astro-decap-cms";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config

export default defineConfig({
	site: "http://remissives.com",
	integrations: [
		DecapCMS({
			config: {
				backend: {
					name: "git-gateway",
					branch: "main",
				},
				collections: [
					// Content collections
					{
						name: "posts",
						label: "Posts",
						label_singular: "Post",
						folder: "src/content/blog",
						create: true,
						delete: true,
						fields: [
							{ name: "title", widget: "string", label: "Title" },
							{ name: "description", widget: "string", label: "Description" },
							{
								name: "pubDate",
								widget: "datetime",
								label: "Date",
								date_format: "MM.DD.YYYY",
							},
							{ name: "heroImage", widget: "image", label: "Featured Image" },
							{ name: "body", widget: "markdown", label: "Content" },
						],
					},
				],
			},
		}),
		mdx(),
		sitemap(),
	],
});
