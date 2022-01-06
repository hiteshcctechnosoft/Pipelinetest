import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import nodeBuiltins from 'builtin-modules'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const LAMBDA_DIR = './src/services'
const lambdaNames = fs.readdirSync(path.join(__dirname, LAMBDA_DIR))

type entry = {
  [index: string]: string[]
}

type external = {
  [index: string]: string
}

// Create entry points for all the lambdas
const entry = lambdaNames.reduce((entryMap: entry, lambdaName: string) => {
  entryMap[lambdaName] = [path.join(__dirname, LAMBDA_DIR, `${lambdaName}/index.ts`)]
  return entryMap
}, {} as entry)

// Exclude all the non required packages from the bundle
const externals = ['aws-sdk'].concat(nodeBuiltins).reduce((externalsMap, moduleName) => {
  externalsMap[moduleName] = moduleName
  return externalsMap
}, {} as external)

const config: webpack.Configuration = {
  entry,
  externals,

  output: {
    path: path.join(__dirname, '/dist'),
    libraryTarget: 'commonjs',
    filename: '[name]/index.js',
  },

  target: 'node',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },

  plugins: [
    new webpack.ProgressPlugin(),

    // Cleans the /dist directory before the build process
    new CleanWebpackPlugin(),
  ],
}

module.exports = config
