const Job = require('../models/job')

function index(req, res) {
    console.log('index router hit')
    res.render('jobs/index', { title: 'Find Jobs', user: req.user, results: null})
}

module.exports = {
    index
}