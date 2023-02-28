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

const create = async account => {
  // DO YOUR MAGIC
  const result = await db('accounts').insert({ name: account.name, budget: account.budget })
  const newAcct = await getById(result)
    return newAcct;
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  const result = await db('accounts').where('id', id).update({ ...account, name: account.name, budget: account.budget })
  const updated = await getById(id);
    return updated;
}

const deleteById = async id => {
  // DO YOUR MAGIC
  const result = await db('accounts').where('id', id).delete()
    return result;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
