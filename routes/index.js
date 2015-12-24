var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/verse-2', function(req, res, next){
  res.render('index', { title: 'Verse 2' })
})

module.exports = router;
