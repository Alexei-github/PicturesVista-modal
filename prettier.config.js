export default {
  $schema: 'https://json.schemastore.org/prettierrc',
  plugins: [
    'prettier-plugin-jsdoc',
    'prettier-plugin-packagejson',
    'prettier-plugin-organize-imports',
  ],
  organizeImportsSkipDestructiveCodeActions: true,
  // importOrder: ['^react$', '^@?\\w+$', '^\\.+$'],
  // importOrderSeparation: true,
  // importOrderSortSpecifiers: true,
  // importOrderParserPlugins: ['typescript', 'jsx'],
  printWidth: 100,
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  bracketSpacing: true,
  tabWidth: 2,

  // settings: {
  //   importOrder: ['^react$', '^@?\\w+$', '^\\.+$'],
  //   importOrderSeparation: true,
  //   importOrderSortSpecifiers: true,
  //   importOrderParserPlugins: ['typescript', 'jsx'],
  // },
};
