const getAll = () => {
  // DO YOUR MAGIC
  db('accounts')
  .then(accounts => {
    return accounts;
  })
  .catch(err => {

  })
}

const getById = id => {
  // DO YOUR MAGIC
  db('accounts').where('id', id).first()
  .then(account => {
    return account;
  })
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
