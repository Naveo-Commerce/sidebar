// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  moduleDirectories: ['node_modules', 'src', "__mocks__"],
  moduleNameMapper: {
    '^@root/(.*)$': '<rootDir>/src/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@views/(.*)$': '<rootDir>/src/views/$1',
    '^@hooks//*': '<rootDir>/src/hooks/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@translations/(.*)$': '<rootDir>/src/translations/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.tsx',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  testMatch: [
    '<rootDir>/src/**/*.(test).{tsx,ts}',
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts', require.resolve('regenerator-runtime/runtime') ],
};

module.exports = config;
