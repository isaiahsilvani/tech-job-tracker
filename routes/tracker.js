const router = require("express").Router();
const trackerCtrl = require('../controllers/tracker')

router.get("/", isLoggedIn, trackerCtrl.index);

router.post("/:id", isLoggedIn, trackerCtrl.addToTracker);
router.delete("/:id/page", isLoggedIn, trackerCtrl.removeTrackerFromPage)
router.delete("/:id", isLoggedIn, trackerCtrl.removeFromTracker);
router.put('/:id', isLoggedIn, trackerCtrl.updateStatus)



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;