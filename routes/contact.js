const router = require("express").Router();

router.get("/", function (req, res) {
  res.render("contact", { title: "Contact Page", user: req.user ? req.user : null });
});

module.exports = router;
