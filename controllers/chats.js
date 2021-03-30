const Chat = require('../models/chat')

module.exports = {
    chatRoom,
    getName
}

function chatRoom(req, res) {
    res.render('chatroom', {
        title: "Chat Room",
        user: req.user
    })
}

function getName(req, res) {
    
}