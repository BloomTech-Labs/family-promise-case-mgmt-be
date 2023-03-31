const router = require('express').Router();
const GoogleEvents = require('./googleEventsModel');

/*

GET EVENT BY ID

*/
router.get('/:event_id', (req, res) => {
  const { event_id } = req.params;
  GoogleEvents.findById(event_id)
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving event',
      });
    });
});

/*

GET ALL EVENTS

*/

router.get('/', (req, res) => {
  GoogleEvents.findAll()
    .then((events) => {
      res.status(200).json(events);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving events',
      });
    });
});

/*

POST EVENT

*/

router.post('/:calendar_id', (req, res) => {
  const { calendar_id } = req.params;
  GoogleEvents.add(calendar_id, req.body)
    .then((newEvent) => {
      res.status(201).json(newEvent);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error adding event',
      });
    });
});

module.exports = router;
