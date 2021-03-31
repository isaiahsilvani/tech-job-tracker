const Message = require('../models/message')

module.exports = {
    index,
    create
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