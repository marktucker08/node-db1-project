const router = require('express').Router()
const Accounts = require('./accounts-model');
const { checkAccountId } = require('./accounts-middleware')

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

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(500).json({ 
    message: err.message,
    stack: err.stack
   })
})

module.exports = router;
