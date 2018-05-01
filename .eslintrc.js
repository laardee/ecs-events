module.exports = {
  root: true,
  extends: 'airbnb-base',
  plugins: ['import'],
  env: {
    node: true,
    jest: true
  },
  rules: {
    'array-bracket-spacing': [
      'error',
      'always',
      {
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'func-names': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'prefer-destructuring': 'off',
    'object-curly-newline': 'off',
    semi: ['error', 'never'],
    'object-shorthand': 'off',
    'import/no-extraneous-dependencies': 'off'
  }
}
