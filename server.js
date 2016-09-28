var express = require('express');

// create the app
 var app = express();
 const PORT = process.env.PORT || 3000;
 app.use(express.static('public'));

app.use(function (req,res,next) {
  if (req.header['X-forwarded-proto']=== 'http') {

  }else {
    res.redirect('http://'+req.hostname+req.url);
  }
})

 app.listen(PORT,function () {
 	console.log('server up in port '+PORT);
 });
