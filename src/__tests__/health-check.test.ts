import { handler } from 'services/test/index'

beforeEach(() => {
  jest.resetAllMocks()
})

afterEach(() => {
  process.env.AWS_LAMBDA_FUNCTION_NAME = ''
  jest.resetAllMocks()
})
describe('[Lambda: Health Check]', () => {
  it('exists', () => {
    expect(handler).toBeTruthy()
  })
})
