module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['**/*.ts(x)'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
