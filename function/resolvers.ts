/** @format */

import {connectDatabase, closeConnection} from './service/database/database'
import {postgres, mongo} from './service/database/database.config'

export default {
  Query: {
    postgres: async (obj, args, context, info) => {
      return await connectDatabase(postgres)
        .then(async res => {
          closeConnection(postgres)
          return res
        })
        .catch(err => {
          return err
        })
    },
    mongo: async (obj, args, context, info) => {
      return await connectDatabase(mongo)
        .then(async res => {
          closeConnection(mongo)
          return res
        })
        .catch(err => {
          return err
        })
    },
  },
}
