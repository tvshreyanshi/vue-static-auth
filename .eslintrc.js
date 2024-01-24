module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'import',
  ],
  // check if imports actually resolve
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'always',
    }],
    'max-len': [0, 140],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js'],
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
