module.exports = {
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testPathIgnorePatterns: [
    '<rootDir>/packages/(?:.+?)/lib/',
    '/node_modules/',
    '/lib/',
  ],
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
};
