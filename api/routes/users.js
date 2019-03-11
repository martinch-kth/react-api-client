var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");


mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/commits");  // 'commits' verkar vara en collection?!?! inte en DB namn?? wtf..????

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//---------------
//var statsSchema = new mongoose.Schema({
//  commit_id: String, package_id: String, tested: String, partially_tested: String, not_covered: String, url_link: String, treemap : String
//});

var statsSchema = new mongoose.Schema({
  commit_id:String, date: { type: Date, default: Date.now }, username:String, repository:String,packages_partially_tested: String,commit_url: String, treemap : String, descartes_results: String
});



  var Stats = mongoose.model('Stats',statsSchema);


//var minicommit = new Commit({ "commit_id" : "66645","package_id" : "123","tested" : "123","partially-tested" : "123","not_covered" : "123", "methodsfilename" : "12345" });


Stats.find(function (err, commits) {
  if (err) return console.error(err);
  console.log(commits);
})

router.get('/:tagId', function(req, res) {

  var query  = Stats.where({ commit_id: req.params.tagId });

  console.log('letar ...')

  query.findOne(function (err, commit) {
    if (err) return handleError(err);
    if (commit) {
      // doc may be null if no document matched
      console.log('hittade ...')

      res.send(commit);
      // res.json(commit);  // kan även vara:....    res.send(commit)
    }
  });

})


module.exports = router;
