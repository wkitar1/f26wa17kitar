var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  var x = Math.random();
  if (req.query.x !== undefined) {
    x = Number(req.query.x);
  }
  var y = Math.asin(x);
  res.send("asin applied to " + x + " is " + y);
});

module.exports = router;
