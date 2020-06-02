var router = require('express').Router();
var mongoose = require('mongoose');
var Article = mongoose.model('Article');

// return a list of tags
router.get('/', function(req, res, next) {
  Article.find().distinct('tagList').then(function(tags){
    return res.json({tags: tags});
  }).catch(next);
});
router.get('/teste', function(req, res, next){
	return res.json({responseCode: 200, message: "Teste Update"});
});
module.exports = router;
