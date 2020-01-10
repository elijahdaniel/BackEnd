const request = require('supertest')

const server = require('../api/server')
const auth = require('../auth/auth-router')
const db = require('../database/dbConfig')

// let token

// beforeAll(done => {
//   request(server)
//     .post('/auth/login')
//     .send({
//       username: 'user',
//       password: 'pw'
//     })
//     .end((err, response) => {
//       token = response.body.token // save the token!
//       done()
//     })
// })

beforeEach(() => db('chefs').truncate())

describe('server', () => {
  test('should be the testing environment', () => {
    expect(process.env.NODE_ENV).toBe('testing')
  })

  it('should return 200 OK', async () => {
    const res = await request(server).get('/')
    expect(res.status).toBe(200)
  })

  it('should be json', async () => {
    const res = await request(server).get('/')
    expect(res.type).toBe('application/json')
  })

  it('should return correct message in an object', async () => {
    const res = await request(server).get('/')
    expect(res.body).toEqual({ message: 'Server is up.' })
  })
})

describe('auth endpoints', () => {
  it('get / should get error for not having a token', async () => {
    const res = await request(server).get('/auth')
    expect(res.status).toBe(400)
  })

  it('post / login registered user', () => {
    return request(server)
      .post('/auth/login')
      .send({ username: 'tanjiro', password: 'nezuko' })
      .then(res => {
        expect(res.type).toBe('application/json')
      })
  })

  it('post / should register new user', () => {
    return request(server)
      .post('/auth/register')
      .send({
        first_name: 'John',
        last_name: 'Monfriez',
        username: 'johnny5',
        email_address: 'night_train@chefs.com',
        password: 'courage'
      })
      .then(response => {
        expect(response).toHaveProperty('status', 201)
      })
  })
})

describe('chef endpoints', () => {
  it('get / should list all chefs', async () => {
    const res = await request(server)
      .get('/chefs')
      .send({
        first_name: 'tanjiro',
        last_name: 'nozuko',
        username: 'tanjiro',
        email_address: 'tnosuko@mail.com',
        password: 'waterForm'
      })
    expect(res.status).toBe(200)
  })

  it('get / should grab chef by id', async () => {
    const res = await request(server).get('/chefs/:id')

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
  })
})
