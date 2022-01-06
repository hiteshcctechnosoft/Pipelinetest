module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.html?$': 'html-loader-jest',
  },
}
