module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		'no-tabs': 'off',
		indent: 'off',
		'func-names': 'off',
		'no-param-reassign': 'off',
		'prefer-rest-params': 'off',
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': 'off',
	},
};
