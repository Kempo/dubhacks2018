var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {speech} = require('./models/speech');
//var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.post('/speechToText', (req, res) => {
  var speech = new Speech({
    text: req.body.text
  });

  speech.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/speech', (req, res) => {
  Speech.find().then((speech) => {
    res.send({speech});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/speech/:item', (req, res) => {
  var item = req.params.item;

  /*if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });*/
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
