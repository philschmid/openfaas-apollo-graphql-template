/** @format */

import {connectDatabase, closeConnection} from './service/database/database'

export default {
  Query: {
    hello: async (obj, args, context, info) => {
      return await connectDatabase(args.text)
        .then(async res => {
          closeConnection(args.text)
          return res
        })
        .catch(err => {
          return err
        })
    },
  },
}
