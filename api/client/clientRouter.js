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

router.delete(':id', (req, res) => {
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

module.exports = router;
