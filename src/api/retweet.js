const Twit = require('twit')
const config = require('../config')

const tConfig = config.twitterConfig
const tParam = config.twitterParams

const twit = new Twit(tConfig)
const param = {
    q: tParam.queryString,
    lang: tParam.language,
    result_type: tParam.resultType,
    count: tParam.searchCount
}

module.exports = retweet = () => {
    twit.get('search/tweets', param, (err, data, response) => {
        if (err) { console.log('ERROR: Search! ', err) }
        if (response && data.statuses) {
            let statusId = data.statuses[0].id_str

            //like
            twit.post('favorites/create', { id: statusId }, (err, response) => {
                if (err) { console.log('ERROR: Like! ', err) }
                if (response) { console.log('SUCCESS: Like! ', data.statuses[0].text) }
            })

            // retweet
            twit.post('statuses/retweet/:id', { id: statusId }, (err, response) => {
                if (err) { console.log('ERROR: Retweet! ', err) }
                if (response) { console.log('SUCCESS: Retweet!', data.statuses[0].text) }
            })
        }
    });
}