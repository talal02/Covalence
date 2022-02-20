const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/formsubmissions', (req, res) => {
  console.log(req.body.email);
  console.log(req.body.username);

  res.send('Thanks for submitting your form...!')
})

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);