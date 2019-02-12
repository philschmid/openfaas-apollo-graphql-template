/** @format */

import {connectDatabase, closeConnection} from '../database'

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

it('Test Different Connection', async () => {
  expect(connectDatabase('x')).rejects.toThrow()
})
