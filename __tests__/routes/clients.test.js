const request = require('supertest');
const express = require('express');
const Clients = require('../../api/client/clientModel');
const clientRouter = require('../../api/client/clientRouter');
const server = express();
server.use(express.json());

jest.mock('../../api/client/clientModel')

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

})


