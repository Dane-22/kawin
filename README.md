# Karen Joyce Dicang — demo portfolio

A responsive, front-end-only portfolio built with Vite, React, TypeScript, and CSS. All portfolio projects and campaign assets are fictional sample presentations. Résumé facts are kept separately in the profile data.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite. Check the production build with `npm run build` and preview it with `npm run preview`.

## Deploy to Vercel

Import this repository in Vercel. Select the **Vite** framework preset, use `npm run build` as the build command, and `dist` as the output directory. Or use the Vercel CLI from the project root:

```bash
npm install
npm run build
npx vercel
```

## Replacing demo content with Karens work

1. Put approved portraits, photos, video posters, and other media in `public/media/`. Use optimized images such as WebP or AVIF when possible. The current SVG files are local visual placeholders.
2. Open `src/content.ts`. Update the `profile` object for biography, experience, education, and contact details. Add social items only when real URLs are available; empty URLs remain hidden.
3. Update each entry in `projects`: replace the title, summary, context, role, category, and `cover.src` (and `cover.alt`) with verified work. Paths to `public/media/` files start with `/media/`. If using a stock image, include its required attribution in `cover.credit` and retain its URL in the project data.
4. Set `isConcept: false` **only after** the entry represents Karen’s real, approved work. This automatically removes its “Concept project” badge. Remove or replace unused demo projects.
5. For a real video, add an optimized video file in `public/media/` and set that project’s `videoSrc` to its `/media/...` path. Keep a representative `cover.src` poster. The “Video sample coming soon” message disappears when `videoSrc` exists.
6. Replace the fictional `campaign` object in `src/content.ts` with an approved real campaign, including its context, role, post assets, and captions. Update the `campaign.posts` image paths and alt text. Remove any sample posts or captions that do not apply.
7. Update the page title, description, and Open Graph metadata in `index.html`. Replace `public/media/og-preview.svg` and `public/favicon.svg` when approved brand assets are ready.

This demo uses no remote stock images. The project visuals are custom abstract SVG placeholders stored in `public/media/`.
