const remarkGfm = require('remark-gfm');

const prettierConfig = require('../.prettierrc.js');

module.exports = {
	stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],

	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		},
	},

	addons: [
		{
			name: '@storybook/addon-docs',
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
			},
		},
		{
			name: '@storybook/addon-storysource',
			options: {
				loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: true },
        },
			},
		},
		{
			name: '@storybook/addon-essentials',
			options: {
        docs: false,
      },
		},
		{
			name: '@storybook/addon-a11y',
			options: {
				runOnly: {
					type: 'tag',
					values: ['wcag2a', 'wcag2aa'],
				},
			},
		},
	],

	docs: {
		autodocs: true,
	},

	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
};
