const db = require('../../data/db-config')

const getAll = async () => {
  // DO YOUR MAGIC
  const result = await db('accounts')
    return result;
}

const getById = async id => {
  // DO YOUR MAGIC
  const result = await db('accounts').where('id', id).first()
    return result;
 
}

const create = account => {
  // DO YOUR MAGIC
  db('accounts').insert({ name: account.name, budget: account.budget })
  .then(newId => {
    return getById(newId)
  })
  .then(newAcc => {
    return newAcc;
  })
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  db('accounts').where('id', id).update({ ...account, name: account.name, budget: account.budget })
  .then(records => {
    return getById(id)
  })
  .then(updated => {
    return updated;
  })
}

const deleteById = id => {
  // DO YOUR MAGIC
  db('accounts').where('id', id).delete()
  .then(num => {
    return getById(id)
  })
  .then(deleted => {
    return deleted;
  })
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
