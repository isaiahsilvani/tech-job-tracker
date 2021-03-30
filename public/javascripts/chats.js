let socket = io()

// CACHED ELEMENT REFERENCES
let message = document.getElementById('message');
let username = document.getElementById('username');
let send_message = document.getElementById('send_message');
let chatroom = document.getElementById('chatroom');
let avatar = document.getElementById('avatar');
let isTyping = document.getElementById('isTyping');
let hunters = document.getElementById('hunters');

// SOCKET EVENTS
// when a user enters the room...
socket.on('user-enter', () => {

})

// when a user leaves the room...
socket.on('user-exit', () => {

})

function getUserName() {
    // make fetch request to our own API!!
    // we'll need a whole new router/controller
    fetch('/chats/getName')
    .then((response) => {
        return response.json()
        .then((date) => {
            socket.emit("register-user", data)
        })
    })
}

getUserName()