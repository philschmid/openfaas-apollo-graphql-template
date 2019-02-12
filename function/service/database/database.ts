/** @format */
import {createConnections, getConnection, createConnection, ConnectionOptions} from 'typeorm'
import {postgres as PostgresConnection, mongo as MongoConnection} from './database.config'

export const connectDatabase = async (type: string) => {
  return new Promise(async (resolve: any, reject: any) => {
    switch (type) {
      case 'postgres':
        await createConnection(PostgresConnection)
          .then(res => {
            resolve(res.isConnected)
          })
          .catch(err => reject(err))
        break
      case 'mongo':
        await createConnection(MongoConnection)
          .then(res => resolve(res.isConnected))
          .catch(err => reject(err))
        break
      default:
        reject(new Error(`keine gültige ${type} DB Connection`))
        break
    }
  })
}
export const closeConnection = async (type: string) => {
  await getConnection(type).close()
  if (getConnection(type).isConnected === false) {
    return true
  } else {
    throw new Error(`DB Connection schließen von ${type} fehlgeschlagen`)
  }
}

// await createConnections([
//   {
//     name: 'postgres',
//     type: 'postgres',
//     host: process.env['pg-host'],
//     port: Number(process.env['pg-port']),
//     username: process.env['pg-user'],
//     password: process.env['pg-password'],
//     database: process.env['pg-db'],
//     synchronize: true,
//     logging: false,
//     entities: [__dirname + '/entity/*{.js,.ts}'],
//   },
//   {
//     name: 'mongo',
//     type: 'mongodb',
//     host: process.env['mongo-host'],
//     port: Number(process.env['mongo-port']),
//     username: process.env['mongo-user'],
//     password: process.env['mongo-password'],
//     database: process.env['mongo-db'],
//     useNewUrlParser: true,
//     // url: 'mongodb+srv://admin:admin@lo',
//     authSource: 'admin',
//   },
// ])
