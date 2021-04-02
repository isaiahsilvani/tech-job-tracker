const router = require("express").Router();
const jobsCtrl = require('../controllers/jobs')
console.log('hit')


router.get("/", jobsCtrl.index);
router.get('/:id', isLoggedIn, jobsCtrl.show)
router.post('/search', jobsCtrl.search)
router.post('/next', jobsCtrl.next)
router.post('/prev', jobsCtrl.prev)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;