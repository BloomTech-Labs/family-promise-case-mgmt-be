const db = require('../../data/db-config');

const add = async (client_id, referral) => {
  await db('referrals').insert({
    ...referral,
    client_id: client_id,
  });
  return findById(client_id);
};

const findAll = () => {
  return db('referrals');
};

const findById = async (client_id) => {
  return db('referrals').where({ client_id });
};

const findByReferralId = async (client_id, referral_id) => {
  return db('referrals').where({ client_id, referral_id });
};

const update = (client_id, referral_id, changes) => {
  return db('referrals').where({ client_id, referral_id }).update(changes, '*');
};

const getAddress = (client_id) => {
  const addressObj = db('referrals')
    .select('street_address', 'apt', 'city', 'state', 'zip')
    .where({ client_id });
  const address = `${addressObj.street_address}${
    address.apt ? `${address.apt},` : ','
  } ${address.city}, ${address.state} ${address.zip}`;
  return address;
};

const remove = (client_id, referral_id) => {
  return db('referrals').where({ client_id, referral_id }).del();
};

module.exports = {
  add,
  findById,
  findByReferralId,
  findAll,
  update,
  getAddress,
  remove,
};
