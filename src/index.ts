import { createServer, startServer } from './server'

const init = async (): Promise<void> => {
  const { app } = createServer()
  const msg = await startServer(app)
  console.log(msg)
}

init()
