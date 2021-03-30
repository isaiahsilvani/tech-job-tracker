const io = require('socket.io')()

// defining an empty object to hold a list of 'chatters'
let chatters = {}


io.on('connection', (socket) => {
    
})

module.exports = io