const router = require('express').Router();
const moment = require('moment');
const Referrals = require('./referralModel');

//update
router.post('/:client_id/:referral_id', (req, res) => {
  const data = req.body;
  const { client_id, referral_id } = req.params;
  Referrals.update(client_id, referral_id, data)
    .then((updated) => {
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
      const returnData = [];
      referrals.forEach((referral) => {
        const toReturn = { ...referral };
        const dateTime = new Date(referral.first_meeting_date);
        const [month, day, year] = [
          dateTime.getMonth(),
          dateTime.getDate(),
          dateTime.getFullYear(),
        ];
        toReturn.first_meeting_date = moment(
          `${month}-${day}-${year}`,
          'MM-DD-YYYY'
        );
        returnData.push(toReturn);
      });
      res.status(200).json(returnData);
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
      res.status(201).json(referral);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error deleting referral',
      });
    });
});

module.exports = router;
