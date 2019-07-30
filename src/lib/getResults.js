/**
 *
 * Compute resulsts for all records on the database ( regardless of the date )
 * and rank them by USD amount
 */
const collection = require('../lib/mongodb/collection')
const BigNumber = require('bignumber.js')
const _ = require('lodash')

module.exports = async (startDate, endDate) => {
  Stats = collection('stats')

  const options = {sort: {date: 1}}

  const query = {}

  if(startDate){
    query.timestamp = query.timestamp || {}
    query.timestamp['$gte'] = startDate
  }

  if(endDate){
    query.timestamp = query.timestamp || {}
    query.timestamp['$lte'] = endDate
  }

  const docs = await Stats.find(query, options).toArray()

  const results = {}
  const dates = []

  for(doc of docs){

    dates.push(doc.date)

    for(address in doc.volume){

      results[address] = results[address] || new BigNumber(0)

      results[address] = results[address].plus(doc.volume[address].totalUsd)
      //console.log("address ->", address)
    }
  }

  const ranking = []

  for(address in results){

    ranking.push({
      address: address,
      amount : results[address].toNumber()
    })

  }

  const orderedRanking = _.orderBy(ranking, 'amount').reverse()

  const result = {
    dates: dates,
    ranking: orderedRanking
  }

  return result
}
