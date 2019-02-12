/** @format */
import {getConnection, createConnection, ConnectionOptions} from 'typeorm'

export const connectDatabase = async (ConnectionObject: ConnectionOptions) => {
  return new Promise(async (resolve: any, reject: any) => {
    switch (ConnectionObject.name) {
      case 'postgres':
        await createConnection(ConnectionObject)
          .then(res => {
            resolve(res.isConnected)
          })
          .catch(err => reject(err))
        break
      case 'mongodb':
        await createConnection(ConnectionObject)
          .then(res => resolve(res.isConnected))
          .catch(err => reject(err))
        break
      default:
        reject(new Error(`keine gültige ${ConnectionObject.name} DB Connection`))
        break
    }
  })
}
export const closeConnection = async ({name}: any) => {
  try {
    await getConnection(name).close()
    return true
  } catch (error) {
    throw error
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
