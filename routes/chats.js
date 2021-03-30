const router = require('express').Router();
const chatsCtrl = require('../controllers/chats');

router.get("/", isLoggedIn, chatsCtrl.chatRoom);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;