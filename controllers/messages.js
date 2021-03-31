const Message = require('../models/message')

module.exports = {
    index
}

function index(req, res) {
    Message.find({})
      .then((messages) => {
      res.render("messages/index", {
        title: "Message Board",
        user: req.user,
        messages: messages.reverse(),
      });
    });
  }