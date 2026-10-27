module.exports = function (eleventyConfig) {
  const writingPreview = process.env.WRITING_PREVIEW === "1";
  eleventyConfig.addGlobalData("writingPreview", writingPreview);
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });


    eleventyConfig.addCollection("projects", function (collectionApi) {
  return collectionApi.getFilteredByGlob("./src/projects/*.md").filter(item => item.inputPath.indexOf("index.md") === -1);
});

  const getWriting = (collectionApi) => collectionApi
    .getFilteredByGlob("./src/blog/*.md")
    .filter(item => item.data.writing === true && (item.data.published !== false || writingPreview))
    .sort((a, b) => b.date - a.date);

  eleventyConfig.addCollection("writing", getWriting);
  eleventyConfig.addCollection("selectedWriting", (collectionApi) => getWriting(collectionApi)
    .filter(item => item.data.featured === true)
    .sort((a, b) => (a.data.featuredOrder ?? Infinity) - (b.data.featuredOrder ?? Infinity))
    .slice(0, 5));


  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
