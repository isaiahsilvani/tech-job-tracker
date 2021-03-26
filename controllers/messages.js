const Message = require('../models/message')

module.exports = {
    index
}

function index(req, res) {
    console.log('messages index router hit')
    res.render('messages/index', { title: 'Message Board', user: req.user, results: null})
}