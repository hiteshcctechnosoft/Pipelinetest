import { APIGatewayProxyEvent, Context, Handler } from 'aws-lambda'

/**
 * Lambda Handler function ad
 */
export const handler: Handler = async function (event: APIGatewayProxyEvent, context: Context) {
  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify(`hello from ${process.env.AWS_LAMBDA_FUNCTION_NAME}`, null, 2),
  }
}
