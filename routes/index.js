var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  musicObj = new musicObjMaker(1, "It's the song that never ends");
  res.render('index', musicObj)
});

router.get('/verse-2', function(req, res){
  musicObj = new musicObjMaker(2, "It goes on and on my friends");
  res.render('index', musicObj)
})

router.get('/verse-3', function(req, res) {
  musicObj = new musicObjMaker(3, "People started singing it not knowing what it was");
  res.render('index', musicObj)
});

router.get('/verse-4', function(req, res){
  musicObj = new musicObjMaker(4, "And they'll continue singing it forever just because...");
  res.render('index', musicObj)
})

function musicObjMaker(currentnumber, verse){
  this.title = verse;
  this.image = currentnumber === 1 ? "images/song-never-ends-" + currentnumber + ".jpg" : "../images/song-never-ends-" + currentnumber + ".jpg";
  var nextnumber = currentnumber + 1;
  this.next = nextnumber > 4 ? "/" : "/verse-" + nextnumber + "/";
}

module.exports = router;
