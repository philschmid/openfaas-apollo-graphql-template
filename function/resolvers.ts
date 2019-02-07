/** @format */

import {connectDatabase, closeConnection} from './service/database'

export default {
  Query: {
    hello: async (obj, args, context, info) => {
      return await connectDatabase()
        .then(async res => {
          console.log(res)
          // closeConnection()
          return "SUCCESS"
        })
        .catch(err => {
          throw err
        })
    },
  },
}
