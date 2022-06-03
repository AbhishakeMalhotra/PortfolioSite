/* FileName : users.js */
/* StudentName :Abhishake Malhotra */
/* Student Id :301177229 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Annie');
});
module.exports = router;