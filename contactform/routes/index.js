var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/contact/send', function(req, res, next) {
  var transporter= nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "projectfullstack@gmail.com",
      pass: "fullstackbootcamp"
    }
  });

  var mailOptions = {
    from: 'Sachin Grover <grover.sachin@gmail.com>',
    to: 'projectfullstack@gmail.com',
    Subject: 'Mail thru Express Application - Website Submission',
    text: 'You have got a new mail from'+req.body.name
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.redirect('/');
    } else {
          console.log("Message sent :"+ info.response);
          res.redirect('/');
      }
  });
});
module.exports = router;
