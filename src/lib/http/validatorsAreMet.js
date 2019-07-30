/**
 * Make sure all requirements for validation are met in a given request
 */
const { validationResult } = require('express-validator')

module.exports = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    })
  }

  next()
}
