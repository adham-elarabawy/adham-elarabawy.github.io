# Writing on elarabawy.com

Draft in Google Docs, then copy the finished text into the article’s Markdown file or share the document with Codex to format it. Google Docs does not automatically sync with the website. Publish only when explicitly requested.

## Published article

**Hubris & Rooftops** is in `src/blog/hubris-and-rooftops.md` and uses `/blog/hubris-and-rooftops/`. Its `published: true` flag includes it in the writing archive and its featured position includes it on the homepage.

## Add another piece

Create a file such as `src/blog/your-piece.md`:

```markdown
---
title: "Your article title"
layout: writing.njk
date: 2026-10-27
writing: true
published: false
permalink: false
featured: true
featuredOrder: 2
headingImage: /assets/writing/your-piece.png
headingAlt: "Handwritten: Your opening thought, transcribed"
headingText: "Your opening thought, transcribed"
---

Your essay begins here. Use a blank line between paragraphs.
```

Put a browser-friendly heading image in `src/assets/writing/`. Set `headingWidth` and `headingHeight` to its pixel dimensions if known. The title is separate from the handwritten opening thought. Omit the image fields to use only a regular text title.

`featured: true` makes a piece eligible for Selected writing. Lower `featuredOrder` numbers appear first; the homepage shows at most five. Featured pieces without an order use newest first. The archive shows all writing, newest first. Each list entry has the title on the left and the month and year on the right.

## Local preview and publishing

Run `npm ci`, then `npm run dev`. The local server at `http://localhost:8081/` includes unpublished drafts in the homepage, archive, and article routes without visible preview labels.

For a production build, `npm run build` cleans generated output and explicitly disables draft previews. Drafts with `published: false` are excluded from the lists and do not generate article pages. Source files committed to this public repository remain publicly readable.

When publication is explicitly requested, set `published: true`, replace `permalink: false` with the intended article path, and set `date` to the publication date. Build and verify the result, then commit and push to `source`; the existing GitHub Actions workflow deploys it to elarabawy.com.

The older `eval.md` and `simplicity.md` starter pages are preserved at their existing URLs and excluded from the lists. Only files with `writing: true` enter the lists.

## Handwritten heading treatment

`scripts/scan-heading.py` uses Pillow and NumPy to extract the original ink from a PNG and generate a repeatable neutral paper texture. It preserves the actual letter shapes and does not use ImageGen. The website feathers the texture around the ink and applies a subtle pressed-ink effect. Preview composites are written to `output/`, outside published assets.

`node scripts/preview-writing.cjs` can also generate an ignored standalone local preview after a build.
