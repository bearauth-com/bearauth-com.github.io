import path from 'node:path';
import url from 'node:url';

import mdx from '@mdx-js/rollup';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeClassNames from 'rehype-class-names';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

process.chdir(path.dirname(url.fileURLToPath(import.meta.url)));

export default defineConfig({
  plugins: [
    checker({ typescript: true }),
    svgr(),
    {
      ...mdx({
        rehypePlugins: [
          [rehypeSlug],
          [rehypeAutolinkHeadings, {
            content: fromHtmlIsomorphic(`
              <svg class="icon icon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
              </svg>
            `, { fragment: true }),
          }],
          // [rehypeSection.default, {}],
          [rehypeHighlight],
          [rehypeClassNames, {
            'h1,h2,h3,h4,h5,h6': 'md-heading',
            a: 'md-link',
            section: 'md-section',
            'pre:has(> code)': 'md-code-block',
          }],
        ],
      }),
      enforce: 'pre',
    },
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  publicDir: '../public',
});