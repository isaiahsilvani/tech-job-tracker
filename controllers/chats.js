const Chat = require('../models/chat')

module.exports = {
    chatRoom
}

function chatRoom(req, res) {
    res.render('chatroom', {
        title: "Chat Room",
        user: req.user
    })
}