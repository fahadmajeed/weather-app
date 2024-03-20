module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Map imports starting with "@" to "src" directory
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.js' }], // Use Babel for transpilation (if needed)
    },
    testEnvironment: 'jsdom', // Simulate a browser environment for tests
    coverageDirectory: './coverage/',
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Optional setup file for environment variables
    testMatch: ['**/*.spec.+(js|jsx|ts|tsx)', '**/*.test.+(js|jsx|ts|tsx)'],
    watchPlugins: [
      'jest-watch-typeahead', // Optional plugin for type-ahead suggestions during test watch mode
    ],
  };
  