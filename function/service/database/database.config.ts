/** @format */
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions'
import {MongoConnectionOptions} from 'typeorm/driver/mongodb/MongoConnectionOptions'
require('dotenv').config({path: `./function/.env.${process.env.NODE_ENV}`})

export const postgres: PostgresConnectionOptions = {
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
}
export const mongo: MongoConnectionOptions = {
  name: 'mongo',
  type: 'mongodb',
  host: process.env['mongo-host'],
  port: Number(process.env['mongo-port']),
  username: process.env['mongo-user'],
  password: process.env['mongo-password'],
  database: process.env['mongo-db'],
  useNewUrlParser: true,
  synchronize: true,
  logging: false,
  // url: 'mongodb+srv://admin:admin@lo',
  authSource: 'admin',
}
