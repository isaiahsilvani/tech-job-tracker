const User = require('../models/user')
const axios = require('axios')
const { htmlToText } = require('html-to-text')

function index(req, res) {
    let apiQuery = null
    let results = null
    res.render('jobs/index', { 
        title: 'Find Jobs', 
        user: req.user,
        page: 0,
        apiQuery,
        results
    })
}

//get the results, spit them back on the index page

function search(req, res) {
    const apiQuery = String(getQueryString(req))
    const results = []
    //console.log(apiQuery)
    axios.get(apiQuery)
    .then((response) => {
        for (let result of response.data) {
            result.description = htmlToText(result.description, {wordwrap: 130})
            results.push(result)
        }
        res.render('jobs/index', {
            title: 'Search Jobs',
            user: req.user,
            results,
            apiQuery,
            page: 1
        })
    })
    }
// 

 


module.exports = {
    index,
    search,
    show
}

function show(req, res) {
    let apiUrl = "https://jobs.github.com/positions/" + req.params.id + '.json'
    console.log(req.user)
    axios
    .get(apiUrl).then((response) => {
        response.data.description = htmlToText(response.data.description, {wordwrap: 130})
        response.data.how_to_apply = htmlToText(response.data.how_to_apply, {wordwrap: 130})
        console.log(response.data)
        res.render('jobs/show', {
            title: 'Game Details',
            user: req.user,
            job: response.data
        })
    })
}

// HELPER FUNCTIONS FOR READABILITY

function getQueryString(req) {
    let apiUrl = ["https://jobs.github.com/positions.json?"]
    let endPoint = []
    const description = String(req.body.keyword).replace(' ', '+')
    const location = String(req.body.location).replace(' ', '+')
    // if desc. was set, put in query string. If fulltime was set, put in query string. If location was set, put in query string
    if (description) {
        endPoint.push(`description=${description}`)
    }
    if (req.body.fullTime) {
        endPoint.push('full_time=true')
    }
    if (location) {
        endPoint.push(`location=${location}`)
    }
    endPoint = endPoint.join('&')
    //if endPoint is empty and therefore false, return search node query of API. Else, return api + endpoint
    if (!endPoint) {
        return apiUrl + 'search=node' + '&page=1'
    } else {
        return apiUrl + endPoint + '&page=1'
    }
}