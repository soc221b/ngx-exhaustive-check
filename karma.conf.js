process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function (config) {
  config.set({
    browsers: ["ChromeHeadless"],
    plugins: [require("karma-jasmine"), require("karma-chrome-launcher")],
  });
};
