require('dotenv').config()

module.exports = {
    twitterConfig: {
        consumer_key: process.env.API_KEY,
        consumer_secret: process.env.API_KEY_SECRET,
        access_token: process.env.ACCESS_TOKEN,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    },
    twitterParams: {
        username: process.env.TWITTER_USERNAME,
        queryString: process.env.QUERY_STRING,
        language: process.env.TWITTER_LANG,
        resultType: process.env.TWITTER_RESULT_TYPE,
        searchCount: process.env.TWITTER_SEARCH_COUNT,
        retweetRate: process.env.TWITTER_RETWEET_RATE * 60 * 1000
    }
}