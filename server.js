const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  // res.sendFile("index.htm");
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
  var weight_ = Number(req.body.weight);
  var height_ = Number(req.body.height);

  var result = Math.floor(weight_/Math.pow(height_,2));

  res.send("BMI is: " + result);
});

app.listen(3000, function(){
  console.log("Server running on pport 3000");
});
