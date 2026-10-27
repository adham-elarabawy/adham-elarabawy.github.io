# Writing on elarabawy.com

Draft in Google Docs if that feels comfortable. When the draft is ready, copy it into the Markdown file for the piece, or share the document with Codex to format and publish it. Google Docs does not automatically sync with this website.

## Your first piece

Start in `src/blog/how-are-we-not-humbled.md`, below the closing `---`.
The handwritten heading is already connected. The page is linked on the homepage and the writing archive as **In progress**. No essay text has been added for you.

When ready, add the body, remove `status: in-progress`, and change `date` to the publication date.

## Add another piece

Create a file such as `src/blog/your-piece.md`:

```markdown
---
title: "Your handwritten heading, transcribed"
layout: writing.njk
date: 2026-10-27
writing: true
featured: true
featuredOrder: 2
headingImage: /assets/writing/your-piece.webp
headingAlt: "Handwritten: Your handwritten heading, transcribed"
---

Your essay begins here. Use a blank line between paragraphs.

## A section heading

More writing.
```

Put the heading photo or scan in `src/assets/writing/`. Use a browser-friendly image such as WebP, JPEG, or PNG. Set `headingWidth` and `headingHeight` to its pixel dimensions if known. Keep the words in `title` and `headingAlt` for accessibility. The layout also shows a readable transcription on small screens. Omit the image fields to use a regular text title.

`featured: true` makes a piece eligible for Selected writing. Lower `featuredOrder` numbers appear first; the homepage shows at most five. Featured pieces without an order use newest first. The archive shows all writing, newest first.

For a draft that should not appear anywhere on the built website, add both `published: false` and `permalink: false`. Source files committed to this public repository are still publicly readable.

## Preview and publish

Run `npm ci`, then `npm run build`, then `npm run dev` for a local preview. Commit and push to the `source` branch when ready; the existing GitHub Actions workflow builds and deploys to elarabawy.com.

The older `eval.md` and `simplicity.md` starter pages are preserved at their existing URLs and excluded from the writing lists. Only files with `writing: true` enter the lists.
