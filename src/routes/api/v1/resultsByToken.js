const getResultsByToken = require('../../../lib/getResultsByToken')

const { param, query } = require('express-validator');

const validatorsAreMet = require('../../../lib/http/validatorsAreMet')
const moment = require('moment')

const isTimestamp = require('validate.io-timestamp')

module.exports = (server) => {
  server.get('/api/v1/resultsByToken/:token', [
    param('token').optional().isString(),

    query('startDate').optional().isInt().toInt().custom((timestamp) => {
      return isTimestamp(timestamp)
    }).withMessage('invalid timestamp'),

    query('endDate').optional().isInt().toInt().custom((timestamp) => {
      return isTimestamp(timestamp)
    }).withMessage('invalid timestamp'),

    validatorsAreMet
  ], async (req, res) => {

    const token = req.params.token

    let startDate
    if(req.query.startDate){
      startDate = req.query.startDate / 1000

      console.log( "start date ->", moment(startDate * 1000).toDate())
    }

    let endDate
    if(req.query.endDate){
      endDate = req.query.endDate / 1000

      console.log( "start date ->", moment(endDate * 1000).toDate())
    }

    const result = await getResultsByToken(token, startDate, endDate)

    res.setHeader('Content-Type', 'application/json');
    res.send(result)
  } )
}
