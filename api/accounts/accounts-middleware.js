const Accounts = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  const { name, budget } = req.body;
  if (name === undefined || budget === undefined) {
    res.status(400).json({ message: "name and budget are required" })
  }
  if (name.length.trim() < 3 || name.length.trim() > 100 ) {
    res.status(400).json({ message: "name of account must be between 3 and 100" })
  } 
  if (typeof budget != 'number') {
    res.status(400).json({ message: "budget of account must be a number" })
  }
  if (budget < 0 || budget > 1000000) {
    res.status(400).json({ message: "budget of account is too large or too small"})
  }
  next()
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  db('accounts').where('name', req.body.name)
  .then(acctName => {
    if (acctName) {
      next()
    } else {
      res.status(400).json({ message: "that name is taken" })
    }
  })
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  const account = await Accounts.getById(req.params.id)
  if (!account) {
    res.status(404).json({ message: "account not found" })
  } else {
    req.account = account
    next()
  }
}
