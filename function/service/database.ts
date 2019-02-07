/** @format */
import {createConnection, getConnection} from 'typeorm'
import {User} from '../entity/User'

export const connectDatabase = async () => {
  return new Promise(async (resolve, reject) => {
    await createConnection({
      type: 'postgres',
      host: process.env['pg-host'],
      port: Number(process.env['pg-port']),
      username: process.env['pg-user'],
      password: process.env['pg-password'],
      database: process.env['pg-db'],
      synchronize: true,
      logging: false,
      entities: [User],
    })
    if (getConnection()) {
      resolve()
    } else {
      reject()
    }
  })
}
export const closeConnection = async () => {
  getConnection().close()
}
