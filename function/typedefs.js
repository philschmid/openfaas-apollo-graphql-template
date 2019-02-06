const { ApolloServer, gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    hello(text:String): String
  }
`
