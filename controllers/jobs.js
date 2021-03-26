const Job = require('../models/job')

function index(req, res) {
    console.log('index router hit')
    res.render('jobs/index', { title: 'Find Jobs', user: req.user, results: [""]})
}

function search(req, res) {
    console.log('search controller function hit')
    console.log(req.body)
    res.redirect('/jobs/')
}

module.exports = {
    index,
    search
}