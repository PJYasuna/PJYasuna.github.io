// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://PJYasuna.github.io',
	base: 'joe-site',
	integrations: [mdx(), sitemap()],
});
