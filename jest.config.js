module.exports = {
  testMatch: ['**/?(*.)(spec|test).ts?(x)'],
  // setupFilesAfterEnv: ['./tests/setupTests.js'],
  transform: {
    '.(ts|tsx)': require.resolve('@swc/jest'),
  },
  moduleNameMapper: {
    '^@utils(.*)$': '<rootDir>/src/utils$1',
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  watchAll: false,
  collectCoverage: true,
  coverageDirectory: './docs/jest-coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
};