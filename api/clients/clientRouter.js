const express = require('express');
const Client = require('./clientModel.js');
const router = express.Router();

router.get('/', (req, res) => {
    Client.getAll()
      .then((clients) => {
        res.status(200).json(clients);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: err.message });
      });
  });

router.get('/:id', (req, res) => { // eslint-disable-line
    const id = req.params.id;
    Client.getById(id)
      .then((client) => {
        if (client) {
          res.status(200).json(client);
        } else {
          res.status(404).json({ error: 'ProfileNotFound' });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }); // eslint-disable-line


router.put('/:id', async (req, res) => {
    try {
      const updateClient = await Client.update(req.params.id, req.body);
      res.status(200).json(updateClient);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

module.exports = router;