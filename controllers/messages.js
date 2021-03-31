const Message = require('../models/message')

module.exports = {
    index,
    create,
    show
}

function show(req, res) {
    Message.findById(req.params.id)
      .then((message) => {
      res.render("messages/show", {
        title: "Message Details",
        user: req.user,
        message,
      });
    });
  }

function create(req, res) {
    req.body.postedBy = req.user.name;
    req.body.avatar = req.user.avatar;
    Message.create(req.body)
      .then(() => {
      res.redirect("/messages");
    });
  }

function index(req, res) {
    Message.find({}, function(err, messages) {
        res.render('messages', {
            title: 'Message Board',
            user: req.user,
            messages
            })
    })
}