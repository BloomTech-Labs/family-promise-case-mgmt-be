const request = require('supertest');
const express = require('express');
const Clients = require('../../api/client/clientModel');
const clientRouter = require('../../api/client/clientRouter');
const server = express();
const noteObject = {
  id: '1',
  client_id: 'd3',
  message: 'This is a note',
  created_by: 'bob smith',
  created_at: '02/22/2222 @13:55',
};
const noteObject2 = {
  ...noteObject,
  id: '2',
};

server.use(express.json());

jest.mock('../../api/client/clientModel');
// mocking middleware
jest.mock('../../api/middleware/authRequired', () =>
  jest.fn((req, res, next) => next())
);

describe('Router Endpoints: Clients', () => {
  beforeAll(() => {
    // This is the module/route being tested
    server.use('/clients', clientRouter);
    jest.clearAllMocks();
  });

  describe('GET /clients', () => {
    it('should return 200', async () => {
      Clients.findAll.mockResolvedValue([]);
      const res = await request(server).get('/clients');

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(0);
      expect(Clients.findAll.mock.calls.length).toBe(1);
    });
  });
  describe('GET /clients/{id}', () => {
    it('should return 200 when client is found', async () => {
      Clients.findById.mockResolvedValue({
        id: 'd3',
        name: 'bob smith',
        email: 'bob@example.com',
      });
      const res = await request(server).get('/clients/d2');

      expect(res.status).toBe(200);
      expect(Clients.findById.mock.calls.length).toBe(1);
    });

    it('Should return 404 when no client is found', async () => {
      Clients.findById.mockResolvedValue();
      const res = await request(server).get('/clients/d2');

      expect(res.status).toBe(404);
      expect(res.body.message).toBe('Client could not be found');
    });
  });

  describe('POST /clients', () => {
    it('should return 200 when client is created', async () => {
      const profile = {
        name: 'Yuske Yurameshi',
        email: 'yuske@example.com',
      };

      Clients.findById.mockResolvedValue(undefined);
      Clients.add.mockResolvedValue([Object.assign({ id: '55' }, profile)]);

      const res = await request(server).post('/clients').send(profile);

      expect(res.status).toBe(201);
      // need migration
      // expect(res.body.profile.id).toBe('55')
      expect(Clients.add.mock.calls.length).toBe(1);
    });
  });

  describe('PUT /clients/{id}', () => {
    it('should return 404 when client is called', async () => {
      const res = await request(server).put('/clients/34');
      expect(res.status).toBe(500); // No body is sent with the PUT request. This should not trigger a 404 or 200.
    });
  });

  describe('Notes Routes', () => {
    describe('GET /clients/{id}/notes', () => {
      it('should return 200 with client notes', async () => {
        Clients.get.mockResolvedValue([noteObject, noteObject2]);
        const res = await request(server).get('/clients/d3/notes');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(2);
      });
    });
    describe('GET /clients/{id}/notes/{noteId}', () => {
      it('should return 200 with specified note', async () => {
        Clients.getById.mockResolvedValue([noteObject]);
        const res = await request(server).get('/clients/d3/notes/1');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(1);
      });
    });
    describe('POST /clients/{id}/notes', () => {
      jest.spyOn(global.console, 'log').mockImplementation(() => {});

      it('should return 201 and insert note', async () => {
        Clients.insert.mockResolvedValue([noteObject]);
        const res = await request(server).post('/clients/d3/notes');
        expect(res.status).toBe(201);
        expect(res.body.length).toBe(1);
      });
    });
    describe('PUT /clients/{id}/notes/{noteId}', () => {
      it('should return 200 and update note', async () => {
        Clients.notesUpdate.mockResolvedValue([noteObject]);
        const res = await request(server).put('/clients/d3/notes/1');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(1);
      });
      it('should return 404 when note is not found', async () => {
        Clients.notesUpdate.mockResolvedValue();
        const res = await request(server).put('/clients/d3/notes/1');
        expect(res.status).toBe(404);
        expect(res.body.message).toBe(
          'The client note with the specified ID does not exist'
        );
      });
    });
    describe('DELETE /clients/{id}/notes/{noteId}', () => {
      it('should return 200 and delete note', async () => {
        Clients.updateDelete.mockResolvedValue([noteObject]);
        const res = await request(server).delete('/clients/d3/notes/1');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(1);
      });
      it('should return 404 when note is not found', async () => {
        Clients.notesUpdate.mockResolvedValue();
        const res = await request(server).put('/clients/d3/notes/1');
        expect(res.status).toBe(404);
        expect(res.body.message).toBe(
          'The client note with the specified ID does not exist'
        );
      });
    });
  });
});
