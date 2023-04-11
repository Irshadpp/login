var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',function(req,res){
  console.log(req.body)

MongoClient.connect('mongodb://0.0.0.0:27017/sample',function(err,client){

if(err){
  console.log('errrr', err)
}else{
  console.log('Database connected')
  client.db('DatabaseName').collection('user').insertOne(req.body)
}
})

  res.send('Succesfully submitted')

})



module.exports = router;
