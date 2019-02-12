/** @format */

// Copyright (c) Alex Ellis 2017. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

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
