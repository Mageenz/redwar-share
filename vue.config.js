const px2rem = require('postcss-plugin-px2rem');

module.exports = {
	pages: {
		main: {
			entry: 'src/main/main.js',
			template: 'public/index.html',
			filename: 'main.html',
			title: '广易'
		},
		redwar: {
			entry: 'src/redwar/redwar.js',
			template: 'public/index.html',
			filename: 'redwar.html',
			title: '福利红包信息'
		},
		project: {
			entry:  'src/project/project.js',
			template: 'public/index.html',
			filename: 'project.html',
			title: '项目信息'
		}
	},

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