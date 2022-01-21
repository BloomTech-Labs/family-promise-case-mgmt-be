const db = require('../../data/db-config')

const faker = [{
    name: 'bob',
    addres: 'bob123',
    email: 'bob@bob',
    id: '96'
}]
// meed help mocking this data for future reference

const add = async(newClient) => {
    const [id] = await db('clients')
    .insert(newClient)

    return findById(id)
}

const findAll = () => {
    return db('clients')
}

const findById = (id) => {
    return db('clients')
    .where({id})
    .first()
}

const remove = (id) => {
    return db('clients')
    .where({id})
    .del()
}

const update = (id, changes) => {
    return db('clients')
    .where({id})
    .update(changes, '*')
}

module.exports = {
    add,
    findById,
    findAll,
    update, 
    remove
}