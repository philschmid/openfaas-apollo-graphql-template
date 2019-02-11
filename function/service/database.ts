/** @format */
import {createConnections, getConnection} from 'typeorm'
import {User} from '../entity/User'

export const connectDatabase = async (type: string) => {
  return new Promise(async (resolve: any, reject: any) => {
    await createConnections([
      {
        name: 'postges',
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
        host: 'localhost',
        port: 31705,
        database: 'admin',
        username: 'admin',
        password: 'password2',
        useNewUrlParser: true,
        // url: 'mongodb+srv://admin:admin@lo',
        authSource: 'admin',
      },
    ])
    switch (type) {
      case 'postress':
        resolve(getConnection('postgress'))
        break
      case 'mongo':
        resolve(getConnection('mongo'))
        break
      default:
        reject(new Error('keine gültige DB Connection'))
    }
  })
}
export const closeConnection = async () => {
  getConnection().close()
}
