/** @format */

import {connectDatabase, closeConnection} from '../database'
import {ConnectionOptions} from 'typeorm'

const failConnection: ConnectionOptions = {
  name: 'postgres',
  type: 'postgres',
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
  const connect = await connectDatabase('postgres')
  expect(connect).toBe(true)
  const disconnect = await closeConnection('postgres')
  expect(disconnect).toBe(true)
})
it('Test MongoDb Connection', async () => {
  const connect = await connectDatabase('mongo')
  expect(connect).toBe(true)
  const disconnect = await closeConnection('mongo')
  expect(disconnect).toBe(true)
})

it('Error Testing Connection', async () => {
  await expect(connectDatabase('x')).rejects.toThrow()
  await expect(connectDatabase('mongo', failConnection)).rejects.toThrow()
  await expect(connectDatabase('postgres', failConnection)).rejects.toThrow()
  await expect(closeConnection('monxgo')).rejects.toThrow()
})
