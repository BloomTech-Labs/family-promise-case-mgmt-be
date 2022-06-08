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
              message: 'Error adding contact preferences',
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

module.exports = router;
