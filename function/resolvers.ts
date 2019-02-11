/** @format */

import {connectDatabase, closeConnection} from './service/database'

export default {
  Query: {
    hello: async (obj, args, context, info) => {
      return await connectDatabase('mongo')
        .then(async res => {
          console.log(res)
          // closeConnection()
          return res
        })
        .catch(err => {
          return err
        })
    },
  },
}
