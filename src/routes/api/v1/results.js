const getResults = require('../../../lib/getResults')

const { param, query } = require('express-validator');

const validatorsAreMet = require('../../../lib/http/validatorsAreMet')
const moment = require('moment')

const isTimestamp = require('validate.io-timestamp')

module.exports = (server) => {
  server.get('/api/v1/results', [
    query('startDate').optional().isInt().toInt().custom((timestamp) => {
      return isTimestamp(timestamp)
    }).withMessage('invalid timestamp'),

    query('endDate').optional().isInt().toInt().custom((timestamp) => {
      return isTimestamp(timestamp)
    }).withMessage('invalid timestamp'),

    validatorsAreMet
  ], async (req, res) => {

    let startDate
    if(req.query.startDate){
      startDate = req.query.startDate / 1000
    }

    let endDate
    if(req.query.endDate){
      endDate = req.query.endDate / 1000
    }

    const result = await getResults(startDate, endDate)

    res.setHeader('Content-Type', 'application/json');
    res.send(result)
  } )
}
