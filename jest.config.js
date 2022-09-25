/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,js,jsx}',
    '!**/node_modules/**',
    '!**/.stories.{js,jsx}',
  ],
};
