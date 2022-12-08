module.exports = {
  "printWidth": 100, // 指定换行的行长度
  tabWidth: 2, // 指定缩进的空格数
  // useTabs: true, // 使用制表符进行缩进
  semi: true, // 在语句末尾打印分号
  singleQuote: true, // 使用单引号
  // jsxSingleQuote: true, // 在jsx中使用单引号
  trailingComma: 'none', // 多行时尽可能打印尾随逗号
  bracketSpacing: true, //在对象文字中打印括号之间的空格。
  jsxBracketSameLine: false, //将>多行JSX元素放在最后一行的末尾(true)，而不是单独放在下一行(false)（不适用于自闭元素）
  parser: 'babylon',
  overrides: [
    {
      files: ['*.json', '.eslintrc', '.tslintrc', '.prettierrc', '.tern-project'],
      options: {
        parser: 'json',
        tabWidth: 4
      }
    },
    {
      files: '*.{css,sass,scss,less}',
      options: {
        parser: 'postcss',
        tabWidth: 2
      }
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript'
      }
    },
    {
      files: ['*.html'],
      options: {
        parser: 'html',
        tabWidth: 2
      }
    }
  ]
};
