const db = require('../../data/db-config')

const add = async(newClient) => {
    const [id] = await db('clients')
    .insert(newClient)

    return findById(id)
}

const find = () => {
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
    find,
    update, 
    remove
}