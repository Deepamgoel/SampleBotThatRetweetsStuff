const config = require('./config')
const retweet = require('./api/retweet')

console.log('Starting bot...')

retweet()
    // setInterval(retweet, config.twitterConfig.retweetRate)