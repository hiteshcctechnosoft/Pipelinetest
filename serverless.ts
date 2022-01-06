import type { Serverless } from 'serverless/aws'
const REGION = 'us-east-1'
const PROFILE = 'sandbox'
const ACCOUNT = '293341091939'

const serverlessConfiguration: Serverless = {
  service: {
    name: 'pipeline-service',
  },
  frameworkVersion: '>=1.72.0',
  custom: {
    webpack: {
      webpackConfig: './local.webpack.config.js',
      includeModules: true,
    },
  },
  // Add the serverless-webpack, serverless-offline
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: REGION,
    profile: PROFILE,
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '0',
    },
  },
  functions: {
    healthcheck: {
      handler: 'src/services/test/index.handler',
      events: [
        {
          http: {
            method: 'get',
            path: 'health-check',
            cors: true,
          },
        },
      ],
    },
  },
}

module.exports = serverlessConfiguration
