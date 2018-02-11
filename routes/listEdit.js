var express = require('express');
var router = express.Router();

/* GET list. */
router.get('/', function(req, res, next) {
    res.send('the list edit page');
});

module.exports = router;