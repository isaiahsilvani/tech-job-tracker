const router = require("express").Router();
const messagesCtrl = require('../controllers/messages')
console.log('hit messages router file')


router.get("/", messagesCtrl.index);

module.exports = router;