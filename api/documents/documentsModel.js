const db = require('../../data/db-config');

const newDocument = {
  completed_hfca: '',
  valid_driver: '',
  valid_social: '',
  dshs_wic_tanf_snap: '',
  responsible_renters_course: '',
  birth_cert_for_children: '',
  child_enrolled_school: '',
  childcare: '',
};

const add = async (client_id) => {
  await db('documents')
    .insert({
      ...newDocument,
      client_id: client_id,
    })
    .returning('client_id');
  return findById(client_id);
};

const findAll = () => {
  return db('documents');
};

const findById = async (client_id) => {
  return db('documents').where({ client_id }).first();
};

const update = (client_id, changes) => {
  return db('documents').where({ client_id }).update(changes, '*');
};

module.exports = {
  add,
  findById,
  findAll,
  update,
};
