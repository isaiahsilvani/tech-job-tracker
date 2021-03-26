const router = require("express").Router();
const jobsCtrl = require('../controllers/jobs')
console.log('hit')


router.get("/", jobsCtrl.index);
router.post('/search', jobsCtrl.search)

module.exports = router;