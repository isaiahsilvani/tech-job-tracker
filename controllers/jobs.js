const Job = require('../models/job')
const axios = require('axios')
const { htmlToText } = require('html-to-text')

function index(req, res) {
    console.log('index router hit')
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
    console.log(apiQuery)
    //console.log(apiQuery)
    axios.get(apiQuery)
    .then((response) => {
        for (let todo of response.data) {
            todo.description = htmlToText(todo.description, {wordwrap: 130})
            results.push(todo)
        }
        res.render('jobs/index', {
            title: 'Search Jobs',
            user: req.user,
            results,
            apiQuery,
            page: 1
        })
    })
    console.log(results)
    }
// 

 


module.exports = {
    index,
    search,
    show
}

function show(req, res) {
    let apiUrl = "https://jobs.github.com/positions/" + req.params.id + '.json'
    console.log(apiUrl)
    axios
    .get(apiUrl).then((response) => {
        res.render('jobs/show', {
            title: 'Game Details',
            user: req.user,
            job: response.data
        })
    })
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
        return apiUrl + 'search=node' + '&page=1'
    } else {
        return apiUrl + endPoint + '&page=1'
    }
}