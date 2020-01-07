const server = require('../server')

const request = require('supertest')

const db = require('../database/dbConfig')

beforeEach(() => db('chefs').truncate())

describe('chefs', () => {
  it('get /', async () => {
    const res = await request(server)
      .post('/chefs')
      .send({
        first_name: 'blake',
        last_name: 'test',
        username: 'testu',
        email_address: 'IamA@yahoo.com',
        password: 'giggles'
      })
    expect(res.status).toBe(200)
  })
  it('get /', async () => {
    const res = await request(server).get('/chefs')
    expect(res.status).toBe(200)
  })
})
