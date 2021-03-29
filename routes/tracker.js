const router = require("express").Router();
const trackerCtrl = require('../controllers/tracker')

router.get("/", trackerCtrl.index);

router.post("/:id", isLoggedIn, trackerCtrl.addToTracker);
router.delete("/:id", isLoggedIn, trackerCtrl.removeFromTracker);



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;