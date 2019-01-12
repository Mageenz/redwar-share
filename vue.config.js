const px2rem = require('postcss-plugin-px2rem');

module.exports = {
	css: {
		loaderOptions: {
			postcss: {
				plugins: [px2rem({
					rootValue: 75
				})]
			}
		}
	}
}