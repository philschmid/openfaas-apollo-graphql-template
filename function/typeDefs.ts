/** @format */

import {gql} from 'apollo-server-express'

export const typeDefs: any = gql`
  type Query {
    postgres(text: String): String
    mongo(text: String): String
  }
`
