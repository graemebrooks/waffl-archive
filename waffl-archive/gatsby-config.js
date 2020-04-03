module.exports = {
	siteMetadata: {
		title: 'WAFFL Archive',
		author: 'Kelso Brooks'
	},
	plugins: [
		'gatsby-plugin-sass',
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 750,
							linkImagesToOriginal: false
						}
					}
				]
			}
		}
	]
};
