<!-- @format -->

# Openfaas Typescript Apollo Servertemplate with offline development

This template is based on the official `express` template from OpenFaaS. It allows you to write your function in Typescript, that will be compiled to javascript during the build process.

includes local development.
don't change files in template

## Usage

```shell
git clone https://github.com/philschmid/openfaas-apollo-grapql-template.git

cd openfaas-apollo-grapql-template

#deploy to kubernetes
npm up

#local developement
npm start
```

### Importend

## Enviroment-Files

add .env.development in /function/ for local-development \n
add .env.production in /function/ for production

#### Example .env

```yaml
#.env.development
#postgresdb
pg-host='localhost'
pg-port=5432
pg-db='postgresdb'
pg-user = 'postgresadmin'
pg-password= 'admin123'

#mongodb test
mongo-host='localhost'
mongo-port=27017
mongo-db='admin'
mongo-user='admin'
mongo-password='adminpassword'

#.env.production
#postgresdb
pg-host='postgres.openfaas-db'
pg-port=5432
pg-db='postgresdb'
pg-user = 'postgresadmin'
pg-password= 'admin123'

#mongodb
mongo-host='mongodb.openfaas-db'
mongo-port=27017
mongo-db='admin'
mongo-user='admin'
mongo-password='password2'
```
