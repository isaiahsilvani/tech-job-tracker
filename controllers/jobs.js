const Job = require('../models/job')

function index(req, res) {
    console.log('index router hit')
    res.render('jobs/index', { title: 'Find Jobs', user: req.user, results: null})
}

function search(req, res) {
    console.log('search controller function hit')
    res.redirect('jobs/index')
}

module.exports = {
    index,
    search
}