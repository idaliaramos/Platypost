// module.exports = {
//   extends: 'airbnb',
//   extends: ['plugin:prettier/recommended'],
// };
// module.exports = {
//   'extends': 'airbnb',
//   'extends':['plugin:prettier/recommended']
//   'parser': 'babel-eslint',
//   'env': {
//     'jest': true,
//   },
//   'rules': {
//     'no-use-before-define': 'off',
//     'react/jsx-filename-extension': 'off',
//     'react/prop-types': 'off',
//     'comma-dangle': 'off'
//   },
//   'globals': {
//     "fetch": false
//   }
// }

// module.exports = {
//   extends: ['airbnb', 'prettier', 'prettier/react'],
//   rules: {
//     'react/jsx-filename-extension': [
//       1,
//       {
//         extensions: ['.js', '.jsx']
//       }
//     ],
//     'prettier/prettier': [
//       'error',
//       {
//         trailingComma: 'es5',
//         singleQuote: true,
//         printWidth: 100
//       }
//     ]
//   },
//   plugins: ['prettier']
// }
module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  globals: {
    __DEV__: [true, false]
  },
  rules: {
    'object-curly-newline': ['error', { minProperties: 5, consistent: true }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'global-require': 0,
    semi: 'off',
    'react/sort-comp': [
      1,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ]
  }
}
