const Job = require('../models/job')

function index(req, res) {
    console.log('index router hit')
    res.render('jobs/index', { title: 'Find Jobs', user: req.user, results: [""]})
}

function search(req, res) {
    //turn req.body into a legitimate search query for github jobs api
    console.log(getQueryString(req))
    res.redirect('/jobs/')
}
 


module.exports = {
    index,
    search
}

// HELPER FUNCTIONS FOR READABILITY

function getQueryString(req) {
    console.log(req.body)
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
        return apiUrl + 'search=node'
    } else {
        return apiUrl + endPoint
    }
}