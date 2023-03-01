const router = require('express').Router()
const Accounts = require('./accounts-model');
const { checkAccountId, checkAccountPayload, checkAccountNameUnique } = require('./accounts-middleware')

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.getAll()
  .then(accts => {
    res.status(200).json(accts)
  })
  .catch(next)
})

router.get('/:id',  checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  res.status(200).json(req.account);
})

router.post('/', checkAccountPayload, checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.create({ 
    name: req.body.name.trim(),
    budget: req.body.budget
  })
  .then(newAcct => {
    res.status(201).json(newAcct)
  })
  .catch(next)
})

router.put('/:id', checkAccountId, checkAccountPayload, (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.updateById(req.params.id, req.body)
  .then(updated => {
    res.status(200).json(updated)
  })
  .catch(next)
});

router.delete('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.deleteById(req.params.id)
  .then(deleted => {
    res.status(200).json(req.account)
  })
  .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(500).json({ 
    message: err.message,
    stack: err.stack
   })
})

module.exports = router;
