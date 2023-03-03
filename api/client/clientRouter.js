const router = require('express').Router();
const Clients = require('./clientModel');
const Household = require('../household/householdModel');
const Gender = require('../genders/gendersModel');
const Race = require('../races/racesModel');
const Ethnicity = require('../ethnicities/ethnicitiesModel');
const EducationHistory = require('../education_histories/educationHistoriesModel');
const EmailAddress = require('../email_addresses/emailAddressesModel');
const PhoneNumber = require('../phone_numbers/phoneNumbersModel');
const PlaceHolder = require('./clientModel');
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

router.get('/placeholder', async (req, res) => {
  try {
    const [
      finances,
      insurance,
      documents,
      contact_preferences,
      referrals,
      goals,
      most_recent_employment,
    ] = await Promise.all([
      PlaceHolder.getAllfinances(req.query),
      PlaceHolder.getAllInsurance(req.query),
      PlaceHolder.getAllDocuments(req.query),
      PlaceHolder.getAllContactPrefs(req.query),
      PlaceHolder.getAllReferrals(req.query),
      PlaceHolder.getAllGoals(req.query),
      PlaceHolder.getAllMostRecentEmploy(req.query),
    ]);
    res.status(200).json({
      finances,
      insurance,
      documents,
      contact_preferences,
      referrals,
      goals,
      most_recent_employment,
    });
  } catch (error) {
    res.status(500).json({ message: 'internal server error' });
  }
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

router.put('/:id', (req, res) => {
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
 * /{id}/notes:
 *  get:
 *    description: Returns a list of client notes
 *    summary: seeing all notes for the client in question
 *    tags:
 *      - client
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
  Clients.get(id)
    .then((note) => {
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
 * /{id}/notes/{id}:
 *  get:
 *    description: Find client notes by id
 *    summary: for seeing a single note details
 *    tags:
 *      - client
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
 * /{id}/notes:
 *  post:
 *    description: Add a new client note
 *    summary: creating new notes
 *    tags:
 *      - client
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
 * /{id}/notes/{id}:
 *  put:
 *    description: Updates a single client note
 *    summary: for updating a single client note
 *    tags:
 *      - client
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
 * /{id}/notes/{id}:
 *  put:
 *    description: Deleting client notes
 *    tags:
 *      - client
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

router.get('/:id/intake', (req, res) => {
  Clients.findById(req.params.id)
    .then((client) => {
      const household = Household.findHouseholdbyId(client['household_id']);
      const locations = Household.findLocationByHouseholdId(
        client['household_id']
      );
      const gender = Clients.getGenderIdByClientId(req.params.id);
      const race = Clients.getRaceIdByClientId(req.params.id);
      const ethnicity = Clients.getEthnicityByClientId(req.params.id);
      const phone_numbers = Clients.getPhoneNumbersByClientId(req.params.id);
      const email_addresses = Clients.getEmailByClientId(req.params.id);
      const education_histories = Clients.getEducationHistoryByClientId(
        req.params.id
      );
      const output =
        client +
        household +
        locations +
        gender +
        race +
        ethnicity +
        phone_numbers +
        email_addresses +
        education_histories;
      res.status(200).json({
        output,
      });
    })
    .catch(() => {
      res.status(500).json({
        message: 'ERROR!',
      });
    });
});

router.put('/:clientId/intake/gender', async (req, res) => {
  const gender_id = Gender.getIdbyName(req.body.gender);
  const { clientID } = req.params;
  try {
    const updatedClient = await Clients.update(clientID, {
      gender_id: gender_id,
    });
    console.log(updatedClient);
    if (!updatedClient) {
      res.status(404).json({
        message: 'The client with the specified ID does not exist',
      });
    } else {
      res.status(200).json(updatedClient);
    }
  } catch (error) {
    res.status(500).json({ message: 'Client could not be modified' });
  }
});

router.put('/:clientId/intake/races', async (req, res) => {
  const race_id = Race.getIdbyName(req.body.race);
  const { clientID } = req.params;
  try {
    const updatedClient = await Clients.update(clientID, { race_id: race_id });
    console.log(updatedClient);
    if (!updatedClient) {
      res.status(404).json({
        message: 'The client with the specified ID does not exist',
      });
    } else {
      res.status(200).json(updatedClient);
    }
  } catch (error) {
    res.status(500).json({ message: 'Client could not be modified' });
  }
});

router.put('/:clientId/intake/ethnicities', async (req, res) => {
  const ethnicity_id = Ethnicity.getIdbyName(req.body.ethnicity);
  const { clientID } = req.params;
  try {
    const updatedClient = await Clients.update(clientID, {
      ethnicity_id: ethnicity_id,
    });
    console.log(updatedClient);
    if (!updatedClient) {
      res.status(404).json({
        message: 'The client with the specified ID does not exist',
      });
    } else {
      res.status(200).json(updatedClient);
    }
  } catch (error) {
    res.status(500).json({ message: 'Client could not be modified' });
  }
});

router.post('/:id/intake/education_history', (req, res) => {
  EducationHistory.add(req.body)
    .then((education_history) => {
      console.log('New education history added:', education_history);
      res.status(201).json(education_history);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Error adding education history' });
    });
});

router.post('/:id/intake/phone_number', (req, res) => {
  PhoneNumber.add(req.body)
    .then((phone_number) => {
      console.log('New phone number added:', phone_number);
      res.status(201).json(phone_number);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Error adding phone number' });
    });
});

router.post('/:id/intake/email_address', (req, res) => {
  EmailAddress.add(req.body)
    .then((email_address) => {
      console.log('New email address added:', email_address);
      res.status(201).json(email_address);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Error adding email address' });
    });
});

module.exports = router;
