module.exports = function(eleventyConfig) {
  // Passthrough copy for admin files and styles
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/styles");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
