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
