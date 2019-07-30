startup = async () => {

  // connect to mongodb
  const mongodb = require('./lib/mongodb/connect')
  await mongodb(process.env.MONGODB_URI)

  // setup webserver
  const express = require('express')
  const expressValidator = require('express-validator')
  const cors = require('cors')
  const path = require('path')

  const PORT = process.env.PORT || 5000

  const yesterday = require('./routes/api/v1/yesterday')
  const byDate = require('./routes/api/v1/byDate')
  const results = require('./routes/api/v1/results')
  const resultsByToken = require('./routes/api/v1/resultsByToken')

  const app = express()

  app
    .disable('x-powered-by')
    .use(cors())

    .get('/api/v1/yesterday', yesterday )
    .get('/api/v1/date/:year/:month/:day', byDate )

    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  // add 'api/v1/results' endpoint
  results(app)

  // add `api/v1/resultsByToken' endpoint
  resultsByToken(app)


  // schedules every day job
  const job = require('./everyDayJob.js')
  job()

  // cache previous days
  const cache = require('./cachePreviousDays')
  cache()

}

startup()
