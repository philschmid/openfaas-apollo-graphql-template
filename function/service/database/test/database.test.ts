/** @format */

import {connectDatabase, closeConnection} from '../database'
import {postgres, mongo} from '../database.config'
import {ConnectionOptions} from 'typeorm'

const failConnectionMongo: ConnectionOptions = {
  name: 'mongodb',
  type: 'mssql',
  host: 'falsch',
  port: 1111,
  username: 'error',
  password: 'no',
  database: 'fehler',
  synchronize: true,
  logging: false,
  entities: [__dirname + '/entity/*{.js,.ts}'],
}
const failConnectionPostgres: ConnectionOptions = {
  name: 'postgres',
  type: 'mssql',
  host: 'falsch',
  port: 1111,
  username: 'error',
  password: 'no',
  database: 'fehler',
  synchronize: true,
  logging: false,
  entities: [__dirname + '/entity/*{.js,.ts}'],
}
const failConnectionDefault: ConnectionOptions = {
  name: 's',
  type: 'mssql',
  host: 'falsch',
  port: 1111,
  username: 'error',
  password: 'no',
  database: 'fehler',
  synchronize: true,
  logging: false,
  entities: [__dirname + '/entity/*{.js,.ts}'],
}

// npm t
it('Test PostgressDb Connection', async () => {
  const connect = await connectDatabase(postgres)
  expect(connect).toBe(true)
  const disconnect = await closeConnection(postgres)
  expect(disconnect).toBe(true)
})
it('Test MongoDb Connection', async () => {
  const connect = await connectDatabase(mongo)
  expect(connect).toBe(true)
  const disconnect = await closeConnection(mongo)
  expect(disconnect).toBe(true)
})

it('Error Testing Connection', async () => {
  await expect(connectDatabase(failConnectionPostgres)).rejects.toThrow()
  await expect(connectDatabase(failConnectionMongo)).rejects.toThrow()
  await expect(connectDatabase(failConnectionDefault)).rejects.toThrow()
  await expect(closeConnection(mongo)).rejects.toThrow()
})
