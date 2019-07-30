const collection = require('../mongodb/collection')

module.exports = async (query, value) => {

  Stats = collection('stats')

  // when using mongo we dont want to show the id
  const options = {
    fields: {
      _id: false
    }
  }

  let doc = await Stats.findOne(query, options)

  if(!doc) {
    doc = await value()

    Stats.insertOne(doc)
  }

  return doc
}
