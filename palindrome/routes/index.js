var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Palindrome' });
});

router.post('/check', function(req, res, next) {
  var toCheck = req.body.pstr;
  var sLen= toCheck.length;
  var i=Math.round(sLen/2);

  while(i!=0){
      for(j=sLen-1;j>i;j--){
        if(toCheck[j]!=toCheck[sLen-j-1]){
            res.write(toCheck + ' having length of ' + sLen + '\n');
            res.write('Comparing ' + toCheck[j] + ' with ' + toCheck[sLen-j] + '\n');
            res.write("Not a Palindrome \n");
            break;
            }
          }
          res.write("Is a Palindrome \n");
          break;
        }
        res.end();
    });

module.exports = router;
