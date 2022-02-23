const express = require('express');
const router = express.Router();
const Notes = require('./notesModel.js');

/**
 * @swagger
 * /notes:
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

router.get('/', (req, res) => {
  Notes.get()
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
 * /notes/:id:
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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Notes.getById(id)
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
 * /notes:
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

router.post('/', (req, res) => {
  Notes.insert(req.body)
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
 * /notes/:id:
 *  put:
 *    description: Updating new notes
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
 *      404:
 *        message: 'The client note with the specified ID does not exist'
 *      500:
 *        message: 'Client note could not be modified'
 */

router.put('/:id', async (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  try {
    const updatedNote = await Notes.update(id, changes);
    if (!updatedNote) {
      res.status(404).json({
        message: 'The client note with the specified ID does not exist',
      });
    } else {
      console.log('Client note updated:', updatedNote);
      res.status(200).json(updatedNote);
    }
  } catch (error) {
    res.status(500).json({ message: 'Client note could not be modified' });
  }
});

/**
 * @swagger
 * /notes/:id:
 *  put:
 *    description: 'Deleting' new notes
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

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNote = await Notes.updateDelete(id);
    if (!deletedNote) {
      res.status(404).json({
        message:
          'The client note with the specified ID does not exist and or update failed',
      });
    } else {
      console.log('Client note updated:', deletedNote);
      res.status(200).json(deletedNote);
    }
  } catch (error) {
    res.status(500).json({ message: 'Client note could not be modified' });
  }
});

module.exports = router;
