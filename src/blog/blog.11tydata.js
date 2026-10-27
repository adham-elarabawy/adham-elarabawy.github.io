// Drafts get a page only in the explicitly enabled local development preview.
module.exports = {
  eleventyComputed: {
    permalink(data) {
      if (data.writing === true && data.published === false) {
        return process.env.WRITING_PREVIEW === "1"
          ? `/blog/${data.page.fileSlug}/`
          : false;
      }
      return data.permalink;
    },
  },
};
