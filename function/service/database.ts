/** @format */
import {createConnections, getConnection} from 'typeorm'
import {User} from '../entity/User'

export const connectDatabase = async (type: string) => {
  return new Promise(async (resolve: any, reject: any) => {
    await createConnections([
      {
        name: 'postgres',
        type: 'postgres',
        host: process.env['pg-host'],
        port: Number(process.env['pg-port']),
        username: process.env['pg-user'],
        password: process.env['pg-password'],
        database: process.env['pg-db'],
        synchronize: true,
        logging: false,
        entities: [__dirname + '/entity/*{.js,.ts}'],
      },
      {
        name: 'mongo',
        type: 'mongodb',
        host: process.env['mongo-host'],
        port: Number(process.env['mongo-port']),
        username: process.env['mongo-user'],
        password: process.env['mongo-password'],
        database: process.env['mongo-db'],
        useNewUrlParser: true,
        // url: 'mongodb+srv://admin:admin@lo',
        authSource: 'admin',
      },
    ])
    switch (type) {
      case 'postgres':
        resolve(getConnection('postgres'))
        break
      case 'mongo':
        resolve(getConnection('mongo'))
        break
      default:
        reject(new Error(`keine gültige ${type} DB Connection`))
    }
  })
}
export const closeConnection = async () => {
  getConnection().close()
}
