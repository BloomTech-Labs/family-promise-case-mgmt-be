const router = require('express').Router();
const Clients = require('./clientModel');

router.get('/', (req, res) => {
  Clients.findAll(req.query)
    .then((clients) => {
      res.status(200).json(clients);
    })
    // sending these to the route handlers as well
    .catch(() => {
      res.status(500).json({ message: 'internal server error' });
    });
});

router.get('/:id', (req, res) => {
  Clients.findById(req.params.id)
    .then((clients) => {
      if (clients) {
        res.status(200).json({ clients });
      } else {
        res.status(404).json({
          message: 'Client could not be found',
        });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'internal server error' });
    });
});

router.post('/', (req, res) => {
  Clients.add(req.body)
    .then((clients) => {
      res.status(201).json(clients);
    })
    .catch(() => {
      res.status(500).json({ message: 'internal server error' });
    });
});

router.delete('/:id', (req, res) => {
  Clients.remove(req.params.id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({
          message: 'Client has been removed',
        });
      } else {
        res.status(404).json({
          message: 'Client could not be found',
        });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'internal server error' });
    });
});

router.put(':id', (req, res) => {
  const changes = req.body;
  Clients.updates(req.params.id, changes)
    .then((clients) => {
      if (clients) {
        res.status(200).json({
          message: 'Clients has been updated',
        });
      } else {
        // i see 404 error handlers  in app.js, could update these to go to them instead
        res.status(404).json({
          message: 'Clients could not be found',
        });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'internal server error' });
    });
});

// CLIENT NOTES ROUTERS

/**
 * @swagger
 * /:id/notes
 *  get:
 *    description: Returns a list of client notes
 *    summary: seeing all notes for the client in question
 *    responses:
 *      200:
 *        description: array of notes
 *        content:
 *              example:
 *                - id: '1'
 *                  client_id: '7'
 *                  source_view: 'home dashboard'
 *                  message: 'Family is waiting for a response from the courthouse'
 *                  created_by: 'Tamara Leonard'
 *                  created_at: 02/22/2222 @13:55
 *                - id: '2'
 *                  client_id: '7'
 *                  source_view: 'cases dashboard'
 *                  message: 'Needs a few more forms filled out before approval'
 *                  created_by: 'Jamie Kai'
 *                  created_at: 03/04/2222 @10:03
 *      500:
 *        message: 'Error retrieving client notes'
 */

router.get('/:id/notes', (req, res) => {
  const { id } = req.params;
  console.log('working notes?');
  Clients.get(id)
    .then((note) => {
      console.log(note);
      res.status(200).json(note);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving client notes',
      });
    });
});

/**
 * @swagger
 * /:id/notes/:id
 *  get:
 *    description: Find client notes by id
 *    summary: for seeing a single note details
 *    responses:
 *      200:
 *        description: a notes object
 *        content:
 *              example:
 *                - id: '1'
 *                  client_id: '7'
 *                  source_view: 'home dashboard'
 *                  message: 'Family is waiting for a response from the courthouse'
 *                  created_by: 'Tamara Leonard'
 *                  created_at: 02/22/2222 @13:55
 *      500:
 *        message: 'Error retrieving client note'
 */

router.get('/:id/notes/:id', (req, res) => {
  const { id } = req.params;
  Clients.getById(id)
    .then((note) => {
      console.log(note);
      res.status(200).json(note);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Error retrieving note' });
    });
});

/**
 * @swagger
 * /:id/notes
 *  post:
 *    description: Add a new client note
 *    summary: creating new notes
 *    responses:
 *      201:
 *        description: a notes object
 *        content:
 *              example:
 *                - id: '3'
 *                  client_id: '7'
 *                  source_view: 'home dashboard'
 *                  message: 'Needs the startup form package'
 *                  created_by: 'Jon Adams'
 *                  created_at: 05/22/2222 @18:35
 *      500:
 *        message: 'Error adding client note'
 */

router.post('/:id/notes', (req, res) => {
  Clients.insert(req.body)
    .then((note) => {
      console.log('New note added:', note);
      res.status(201).json(note);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Error adding client note' });
    });
});

/**
 * @swagger
 * /:id/notes/:id
 *  put:
 *    description: Updating old notes
 *    responses:
 *      200:
 *        description: a notes object
 *        content:
 *              example:
 *                - id: '3'
 *                  client_id: '7'
 *                  source_view: 'home dashboard'
 *                  message: ~updated~ they have recieved all needed notes'
 *                  created_by: 'Jon Adams'
 *                  created_at: 05/28/2222 @14:00
 *      404:
 *        message: 'The client note with the specified ID does not exist'
 *      500:
 *        message: 'Client note could not be modified'
 */

router.put('/:clientID/notes/:noteID', async (req, res) => {
  const changes = req.body;
  const { clientID, noteID } = req.params;
  try {
    const updatedNote = await Clients.notesUpdate(clientID, noteID, changes);
    console.log(updatedNote);
    if (!updatedNote) {
      res.status(404).json({
        message: 'The client note with the specified ID does not exist',
      });
    } else {
      res.status(200).json(updatedNote);
    }
  } catch (error) {
    res.status(500).json({ message: 'Client note could not be modified' });
  }
});

/**
 * @swagger
 * /:id/notes/:id
 *  put:
 *    description: 'Deleting' client notes
 *    responses:
 *      200:
 *        description: a notes object
 *        content:
 *              example:
 *                - id: '3'
 *                  client_id: '7'
 *                  source_view: 'home dashboard'
 *                  message: 'Needs the startup form package - update they have recieved all needed notes'
 *                  created_by: 'Jon Adams'
 *                  created_at: 05/28/2222 @14:00
 *                  deleted_at: 05/29/2222 @12:45
 *      404:
 *        message: 'The client note with the specified ID does not exist'
 *      500:
 *        message: 'Client note could not be modified'
 */

router.delete('/:id/notes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNote = await Clients.updateDelete(id);
    if (!deletedNote) {
      res.status(404).json({
        message: 'The client note with the specified ID does not exist',
      });
    } else {
      console.log('Client note updated:', deletedNote);
      res.status(200).json(deletedNote);
    }
  } catch (error) {
    res.status(500).json({ message: 'Client note could not be modified' });
  }
});

/*
Intake Form Router
*/

module.exports = router;
