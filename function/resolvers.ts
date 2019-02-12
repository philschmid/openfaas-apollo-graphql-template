/** @format */

import {connectDatabase, closeConnection} from './service/database/database'
import {postgres, mongo} from './service/database/database.config'

export default {
  Query: {
    hello: async (obj, args, context, info) => {
      return await connectDatabase(postgres)
        .then(async res => {
          closeConnection(postgres)
          return res
        })
        .catch(err => {
          return err
        })
    },
  },
}
