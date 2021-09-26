import * as express from 'express'
import * as bodyParser from 'body-parser'
import createGenericRoutes from './routes/generic'

const config = {
  app: {
    host: '0.0.0.0',
    port: 5000,
  },
}

export const createServer = () => {
  const app = express()
  app.use(bodyParser.json())

  const router = express.Router()

  app.use('/', createGenericRoutes(router))

  return { app }
}

export const startServer = (app: express.Application) => {
  return new Promise((resolve) => {
    app.listen(config.app.port, config.app.host, () => {
      resolve(`Service started in ${config.app.host}: ${config.app.port}`)
    })
  })
}
