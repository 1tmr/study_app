const router = require('express').Router();

router.get("/", function (req, res) {
  res.render('info');
});

// MUST HAVE LINE in case you want it working =)
module.exports = router;
