module.exports = {
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  setupFilesAfterEnv: ['./setupEnzymeAndJestStyledComps.js'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
  coverageReporters: ['json', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 85,
      functions: 90,
      lines: 90,
    },
  },
  testPathIgnorePatterns: [
    './setupEnzymeAndJestStyledComps.js',
    'coverage',
    './node_modules/',

  ],
  coveragePathIgnorePatterns: [
    './src/static/',
      './src/index.js'
  ],
};
