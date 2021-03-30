const io = require('socket.io')()

let hunters = {}


io.on('connection', (socket) => {
    
    // When someone enters the room, add them to chatroom
    // this socket is listenening for a register user event from any client
    socket.on('register-user', () => {
        // when user event 'register-user' happens, broadcast (emit) a response
        io.emit('user-enter')
    })
     
    // when someone leaves the room
    socket.on('disconnect', () => {
        io.emit('user-exit')
    })
})

module.exports = io