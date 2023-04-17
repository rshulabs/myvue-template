module.exports = {
	parser: 'vue-eslint-parser',
	// parser: 'babel-eslint',

	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},

	// 扩展配置
	extends: [
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		// 如果同时使用了eslint和prettier发生冲突了，会关闭掉与prettier有冲突的规则，也就是使用prettier认为对的规则
		'plugin:prettier/recommended',
	],

	// plugins 配置那些我们想要Linting规则的插件
	plugins: ['prettier'], // eslint 会使用pretter的规则对代码格式化

	// 自定义规则,也可以对许多eslint的内置规则，进行禁用
	rules: {
		'prettier/prettier': 'error',
		// semi: 0, // 行末分号，根据编码习惯选择添加，这里配置的是不加分号
	},
}
