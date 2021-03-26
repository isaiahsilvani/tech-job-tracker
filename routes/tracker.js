const router = require("express").Router();
const trackerCtrl = require('../controllers/tracker')
console.log('hit tracker route file')


router.get("/", trackerCtrl.index);

module.exports = router;