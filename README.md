<img src="https://avatars3.githubusercontent.com/u/33315316?s=200&v=4" align="right" />

# EFX Trustless Competition

  This API provides the volume ranking of wallet addresses trading on https://trustless.ethfinex.com

# Example requests


  - [api/v1/date/2019/06/13](http://competition.nectar.community/api/v1/date/2019/06/13)
    - Display volume of for all tokens traded and respective USD values for all wallets in a given date

  - [api/v1/resultsByToken/eth](http://competition.nectar.community/api/v1/resultsByToken/eth)
    - Display volume ranking for an specified token, quoted in given token

  - [api/v1/resultsByToken/eth?startDate=1563408000000](http://competition.nectar.community/api/v1/resultsByToken/eth?startDate=1563408000000)
    - Display volume ranking for an specified token, quoted in given token
    - Providing `startDate` unix timestamp in millieconds ) for 18/07/2019 UTC-0

  - [/api/v1/resultsByToken/eth?startDate=1563408000000&endDate=1564012800000](http://competition.nectar.community/api/v1/resultsByToken/eth?startDate=1563408000000&endDate=1564012800000)
    - Display volume ranking for an specified token, quoted in given token
    - Providing `startDate` unix timestamp in millieconds ) for 18/07/2019 UTC-0
    - Providing `endDate` unix timestamp in millieconds ) for 25/07/2019 UTC-0

  - [api/v1/results](http://competition.nectar.community/api/v1/results)
    - Display volume ranking, quoted in USD

  - [api/v1/results?startDate=1563408000000](http://competition.nectar.community/api/v1/results?startDate=1563408000000)
    - Display volume ranking, quoted in USD
    - Providing `startDate` unix timestamp in millieconds ) for 18/07/2019 UTC-0

  - [/api/v1/results?startDate=1563408000000&endDate=1564012800000](http://competition.nectar.community/api/v1/results?startDate=1563408000000&endDate=1564012800000)
    - Display volume ranking, quoted in USD
    - Providing `startDate` unix timestamp in millieconds ) for 18/07/2019 UTC-0
    - Providing `endDate` unix timestamp in millieconds ) for 25/07/2019 UTC-0

## Developing

1. `npm run develop`

Note: you should update .env file with your own INFURA web3 provider address

### You can also deploy your own version to heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

