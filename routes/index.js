var express = require('express');
var router = express.Router();
var dateTime = require('get-date');
var burger = require('../models/burger.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  //display button
  burger.findAll({})
        .then(function(result) {
          var arrayForTemplate = [];
          console.log("Result Length"+result.length);
          //result is an array of objects with a property called
          //dataValues which contains all the info
          for (var i = 0; i < result.length; i++) {
            arrayForTemplate.push(result[i]['dataValues']);
            console.log(arrayForTemplate);
          }
          console.log(arrayForTemplate);
          res.render('index',{title:'Eat Da Burger',
                              burgersToDevour:arrayForTemplate
                            });
        });
});

// Handle the form input
router.post('/inputBurger',function(req,res){
  //console.log(req.body);
  var burgerName = req.body.burgerFormInput;
  console.log(burgerName);
  var currentTime = dateTime();
  var formatedDate = formatDate(currentTime);
  console.log(formatedDate);

  burger.create({
    burger_name:burgerName,
    devoured:false,
    date:formatedDate
  });
  res.redirect('back');

});

// Handle the devoured button
router.post('/handleDevour',function(req,res){
  console.log(req.body);
  var currentTime = dateTime();
  var formatedDate = formatDate(currentTime);
  var idToDevour = req.body.id;
  // take the idToDevour and update the devour value;
  burger.update({
    devoured:true,
    updatedAt:formatedDate
  },{
    where:{
      id:idToDevour
    }
  });


  // render devoured burgers to devoured div

  res.redirect('back');
});


function formatDate(currentDate) {
  var formattedDate = undefined;

  currentDate = currentDate.split("/");
  var day = currentDate[0];
  var month = currentDate[1];
  var year = currentDate[2];

  var formattedDate = year +'-'+ month +'-'+ day;


  return formattedDate;
}

module.exports = router;
