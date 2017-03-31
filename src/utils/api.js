import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */

/* NEWS: https://newsapi.org/ */

export const NEWS_API_KEY = '6511bb095d854117a18335e9b56aae19'

export const ENDPOINTS = {

    NEWS_API_URL: 'https://newsapi.org/v1/articles',
    NEWS_API_URL_BIS: 'https://newsapi.org/v1/sources'

}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    })
}