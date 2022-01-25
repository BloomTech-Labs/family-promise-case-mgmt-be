const db = require('../../data/db-config.js');

const getAll = async () => {
    return await db('clients') //eslint-disable-line
}

const getById = async (ID) => {
    return await db("clients").where({ ID }).first().select('*'); //eslint-disable-line
}

const update = (id, changes) => {
    return db("clients").where({ id }).update(changes).returning("*") // eslint-disable-line
}

module.exports = {
    getAll, //eslint-disable-line
    getById, //eslint-disable-line
    update, //eslint-disable-line
} //eslint-disable-line