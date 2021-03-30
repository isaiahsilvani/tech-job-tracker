const { Mongoose } = require('mongoose')
const User = require('../models/user')

module.exports = {
    index,
    addToTracker,
    removeFromTracker,
    removeTrackerFromPage,
    updateStatus
}

function updateStatus(req, res) {
    let idx = null
    req.user.jobsList.forEach((j, i) => {
        console.log(i)
        // the == is the whole reason why this is custom middle
        if ( j._id == req.params.id) {
            idx = i
        }
    })
    req.user.jobsList[idx].status = req.body.status
    req.user.save()
    console.log(idx)
    res.redirect(`/tracker`)
}

// custom middle ware




// req.user.jobsList.forEach((j) => {
//     console.log('job._id: ', j._id, typeof j._id, ' || ', 'req.params.id: ', req.params.id, typeof req.params.id)
//     if ( String(j._id) == String(req.params.id)) {
//         console.log(j)
//         let job = j
//     }
// })




function removeTrackerFromPage(req, res) {
    let idx = req.user.jobsList.findIndex((j) => j.id === req.params.id)
    req.user.jobsList.splice(idx, 1)
    req.user.save()
    .then(() => {
        res.redirect(`/tracker`)
    })
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