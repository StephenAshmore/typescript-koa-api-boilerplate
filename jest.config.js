module.exports = {
    preset: 'ts-jest',
    testMatch: [
        "**/src/**/*.test.ts"
    ],
    collectCoverageFrom: [
        "**/src/**/*.ts",
        "!**/src/**/*.test.ts"
    ],
    coverageDirectory: 'shippable/codecoverage/',
    coverageReporters: ['cobertura', 'json', 'text']
}