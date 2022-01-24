const request = require('supertest');
const express = require('express');
const Clients = require('../../api/client/clientModel');
const clientRouter = require('../../api/client/clientRouter');
const server = express();
server.use(express.json());


jest.mock('../../api/client/clientModel')
// mocking middleware
jest.mock('../../api/middleware/authRequired', () =>
  jest.fn((req, res, next) => next())
);

describe('client router endpoints', () => {
    beforeAll(() => {
      // This is the module/route being tested
      server.use('/clients', clientRouter);
      jest.clearAllMocks();
    });


describe(' Get /clients', () => {
    it('should return 200', async () => {
        Clients.findAll.mockResolvedValue([])
        const res = await request(server).get('/clients')

        expect(res.status).toBe(200)
        expect(res.body.length).toBe(0)
        expect(Clients.findAll.mock.calls.length).toBe(1);
    })
})
describe('Get /clients/:id', () => {
  it('should return 200 when client is found', async () => {
    Clients.findById.mockResolvedValue({
      id: 'd3',
      name: 'bob smith',
      email: 'bob@example.com'
    })
    const res = await request(server).get('/clients/d2')

    expect(res.status).toBe(200)
    // need migrations to test 
    // expect(res.body.name).toBe('bob smith') 
    expect(Clients.findById.mock.calls.length).toBe(1)

  })

  it('Should return 404 when no client found', async () => {
    Clients.findById.mockResolvedValue()
    const res = await request(server).get('/clients/d2')

    expect(res.status).toBe(404)
    expect(res.body.message).toBe('Client could not be found')
  })
})

describe('Post /clients', () => {
  it('should return 200 when client is created', async () => {
    const profile = {

      name: 'Yuske Yurameshi',
      email: 'yuske@example.com',
    }
    Clients.findById.mockResolvedValue(undefined);
    Clients.add.mockResolvedValue([
      Object.assign({id: '55'}, profile)
    ])

    const res = await request(server).post('/clients').send(profile)

    expect(res.status).toBe(201)
    // need migration
    // expect(res.body.profile.id).toBe('55')
    expect(Clients.add.mock.calls.length).toBe(1);

  })
})

describe('put /client', () => {
  it('should return 404 when client is is called', async() => {
  
    const res = await request(server).put('/clients/34')
    expect(res.status).toBe(404)

  })


})

describe('delete, /delete', () => {
  it('should delete return 404 swhen called', async() => {
    const res = await request(server).delete('/clients/4')
    Clients.remove.mockResolvedValue()


    expect(res.status).toBe(404)
    expect(res.body.message).toBe('Client could not be found')

  })
})



})


