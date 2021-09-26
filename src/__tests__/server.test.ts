import * as request from 'supertest'
import { createServer } from '../server'

describe('/health', () => {
  it('should return OK', function (done) {
    const { app } = createServer()
    request(app).get('/health').expect(200, done)
  })
})
