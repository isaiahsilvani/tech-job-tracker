const Job = require('../models/job')
const axios = require('axios')
const { htmlToText } = require('html-to-text')

function index(req, res) {
    console.log('index router hit')
    let results = []
    res.render('jobs/index', { title: 'Find Jobs', user: req.user, results})
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
            console.log(todo)
            todo.description = htmlToText(todo.description, {wordwrap: 130})
            console.log(todo)
            results.push(todo)
        }
        res.render('jobs/index', {
            title: 'Search Jobs',
            user: req.user,
            results
        })
    })
    console.log(results)
    }
// 

 


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