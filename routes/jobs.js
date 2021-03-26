const router = require("express").Router();
const jobsCtrl = require('../controllers/jobs')
console.log('hit')


router.get("/", jobsCtrl.index);

module.exports = router;