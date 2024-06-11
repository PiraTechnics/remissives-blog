import { defineConfig } from "astro/config";
import DecapCMS from "astro-decap-cms";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import { POST_CATEGORIES } from "./src/consts";

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
				media_folder: "public/images/",
				public_folder: "images/",
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
							{
								name: "title",
								widget: "string",
								label: "Title",
							},
							{
								name: "description",
								widget: "text",
								label: "Description",
							},
							{
								name: "tags",
								label: "Tags",
								widget: "list",
							},
							{
								name: "category",
								label: "Category",
								widget: "select",
								options: POST_CATEGORIES,
							},
							{
								name: "pubDate",
								widget: "datetime",
								label: "Date",
								date_format: "MMMM-DD-YYYY",
							},
							{
								name: "heroImage",
								widget: "image",
								label: "Featured Image",
							},
							{
								name: "body",
								widget: "markdown",
								label: "Content",
							},
						],
					},
				],
			},
		}),
		mdx(),
		sitemap(),
		tailwind(),
	],
});
