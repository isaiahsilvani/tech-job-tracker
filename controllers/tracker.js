const Job = require('../models/job')

module.exports = {
    index
}

function index(req, res) {
    console.log('index router hit')
    res.render('tracker/index', { title: 'Job Tracker', user: req.user, results: null})
}