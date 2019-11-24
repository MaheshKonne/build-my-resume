module.exports = {
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  setupFilesAfterEnv: ['./setupEnzyme.js'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
  coverageReporters: ['json', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 25,
      branches: 20,
      functions: 20,
      lines: 25,
    },
  },
  testPathIgnorePatterns: [
    './setupEnzyme.js',
    'coverage',
    './node_modules/',
  ],
  coveragePathIgnorePatterns: [
    './src/static/',
  ],
};
