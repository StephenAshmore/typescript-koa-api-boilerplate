module.exports = function() {

    return {
        files: [
            'tsconfig.json',
            'src/**/*.ts',
            '!src/**/*.test.ts'
        ],

        tests: ['src/**/*.test.ts'],

        env: {
            type: 'node',
            runner: 'node'
        },

        testFramework: 'jest',

        preprocessors: {
            '**/*.js?(x)': file => require('babel-core').transform(
                file.content, { sourceMap: true, filename: file.path, presets: ['babel-preset-jest'] })
        }
    };
};