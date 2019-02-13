/** @format */

import * as express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {typeDefs} from './function/typeDefs'
import resolvers from './function/resolvers'
const app = express()
require('dotenv').config({path: `./function/.env.${process.env.NODE_ENV}`})

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({app})

const port = 3000

app.listen(port, () => {
  console.log(`OpenFaaS Node.js listening on port: ${port}`)
})
