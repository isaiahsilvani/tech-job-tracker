const User = require('../models/user')

module.exports = {
    index,
    addToTracker,
    removeFromTracker
}

function index(req, res) {
    console.log('index router hit')
    res.render('tracker/index', { title: 'Job Tracker', user: req.user, results: null})
}

function addToTracker(req, res) {
    console.log('add to tracker function hit')
    console.log(req.body)
    req.user.jobsList.push(req.body)
    req.user.save()
    .then(() => {
        res.redirect(`/jobs/${req.params.id}`)
    })
}

function removeFromTracker(req, res) {
    console.log('remove from tracker function hit')
    let idx = req.user.jobsList.findIndex((j) => j.id === req.params.id)
    req.user.jobsList.splice(idx, 1)
    req.user.save()
    .then(() => {
        res.redirect(`/jobs/${req.params.id}`)
    })
}