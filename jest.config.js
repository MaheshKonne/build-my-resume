module.exports = {
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  setupFilesAfterEnv: ['./setupEnzyme.js'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
  coverageReporters: ['json', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
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
