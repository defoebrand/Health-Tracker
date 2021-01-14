const postcss = require('postcss-import');
const flexbugs = require('postcss-flexbugs-fixes');
const preset = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcss,
    flexbugs,
    preset({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
  ],
};
