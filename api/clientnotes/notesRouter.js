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

module.exports = router;
