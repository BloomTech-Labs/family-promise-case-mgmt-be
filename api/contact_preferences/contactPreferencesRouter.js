const router = require('express').Router();
const ContactPreferences = require('./contactPreferencesModel');

router.get('/:client_id', (req, res) => {
  const { client_id } = req.params;
  ContactPreferences.findById(client_id)
    .then((contactPreferences) => {
      res.status(200).json(contactPreferences);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving contact preferences',
      });
    });
});

/**
 * @swagger
 * /:client_id:
 *  get:
 *    description: Retrieve client's contact preferences
 *    summary: for seeing all client's contact preferences
 *    responses:
 *      200:
 *        description: a client's contact preferences object
 *        content:
 *              example:
 *                - client_id: 1,
 *                  food_assistance: true,
 *                  clothing_assistance: false,
 *                  counseling_services: true,
 *                  addiction_resources: false,
 *                  mentor_programs: true,
 *                  youth_services: false,
 *                  budgeting: true,
 *                  can_text_employment_opportunities: false,
 *                  can_text_apartment_listings: true,
 *                  can_text_career_fairs: false,
 *      500:
 *        message: 'Error retrieving contact preferences'
 */

router.post('/:client_id', (req, res) => {
  const { client_id } = req.params;
  ContactPreferences.findById(client_id)
    .then((contactPreferences) => {
      if (contactPreferences === undefined) {
        ContactPreferences.add(client_id, req.data)
          .then((newPreferences) => {
            res.status(201).json(newPreferences);
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json({
              message: 'Error adding contact preferences',
            });
          });
      } else {
        ContactPreferences.update(client_id, req.body)
          .then((newPreferences) => {
            res.status(201).json(newPreferences);
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json({
              message: 'Error updating contact preferences',
            });
          });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving contact preferences',
      });
    });
});

/**
 * @swagger
 * /:client_id:
 *  post:
 *    description: Update client's contact preferences
 *    summary: for updating and creating client's contact preferences
 *    responses:
 *      200:
 *        description: a client's contact preferences object
 *        content:
 *              example:
 *                - client_id: 1,
 *                  food_assistance: true,
 *                  clothing_assistance: false,
 *                  counseling_services: true,
 *                  addiction_resources: false,
 *                  mentor_programs: true,
 *                  youth_services: false,
 *                  budgeting: true,
 *                  can_text_employment_opportunities: false,
 *                  can_text_apartment_listings: true,
 *                  can_text_career_fairs: false,
 *      500:
 *        possible messages: [ 'Error retrieving contact preferences', 'Error updating contact preferences', 'Error adding contact preferences' ]
 */

module.exports = router;
