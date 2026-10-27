// Build a local-only draft preview after npm run build; never commits generated HTML.
const fs = require('node:fs');
const matter = require('gray-matter');
const nunjucks = require('nunjucks');
const markdown = require('markdown-it')({html: true});
const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/_includes'));
const draft = matter(fs.readFileSync(process.argv[2] || 'src/blog/hubris-and-rooftops.md', 'utf8'));
const template = matter(fs.readFileSync('src/_includes/writing.njk', 'utf8')).content;
const data = {...draft.data, page: {date: new Date(draft.data.date)}, writingPreview: true, content: markdown.render(draft.content)};
const article = env.renderString(template, data);
if (!article) throw new Error('Preview render failed');
const result = fs.readFileSync('_site/index.html', 'utf8')
  .replace('<title>Home</title>', `<title>${draft.data.title}</title>`)
  .replace(/<main class="prose prose-lg max-w-none">[\s\S]*?<\/main>/,
    '<main class="prose prose-lg max-w-none">' + article + '</main>');
const preview = draft.data.twitterEmbed
  ? result.replace('</body>', '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></body>')
  : result;
fs.mkdirSync('_site/__preview', {recursive: true});
fs.writeFileSync('_site/__preview/index.html', preview);
console.log('Local preview: http://localhost:8081/__preview/');
