module.exports = function (eleventyConfig) {
  // Optional: also copy any images/assets
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });


    eleventyConfig.addCollection("projects", function (collectionApi) {
  return collectionApi.getFilteredByGlob("./src/projects/*.md").filter(item => item.inputPath.indexOf("index.md") === -1);
});

    eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
    });


  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
