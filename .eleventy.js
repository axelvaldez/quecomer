module.exports = function(eleventyConfig) {
  // Passthrough copy for admin files
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
