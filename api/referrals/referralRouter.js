const router = require('express').Router();
const Referrals = require('./referralModel');

//update
router.post('/:client_id/:referral_id', (req, res) => {
  const data = req.body;
  const { client_id, referral_id } = req.params;
  Referrals.update(client_id, referral_id, data)
    .then((updated) => {
      console.log(updated);
      res.status(201).json(updated);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error updating referral',
      });
    });
});

//add
router.post('/:client_id', (req, res) => {
  const { client_id } = req.params;
  const data = req.body;
  Referrals.add(client_id, data)
    .then((referral) => {
      res.status(201).json(referral);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error updating referral',
      });
    });
});

router.get('/:referral_id', (req, res) => {
  const { referral_id } = req.params;
  Referrals.findById(referral_id)
    .then((referrals) => {
      res.status(200).json(referrals);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving referrals',
      });
    });
});

router.delete('/:client_id/:referral_id', (req, res) => {
  const { client_id, referral_id } = req.params;
  Referrals.remove(client_id, referral_id)
    .then((referral) => {
      res.status(410).json(referral);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error deleting referral',
      });
    });
});

module.exports = router;
