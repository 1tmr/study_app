const router = require('express').Router();

router.get("/create", function(req, res){
  res.render("admin/user/create");
});

module.exports = router;
