//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/DubHacks', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('DubHacks');

  db.collection('Speech').insertOne({
    item:'glasses',
    location: 'nightstand'
  }, (err,result) => {
    if (err) {
      return console.log('Unable to insert item', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Insert new doc into Users (name, age, location string)
  // db.collection('Users').insertOne({
  //   name: 'Shwetha',
  //   age: 20,
  //   location: 'Markham'
  // }, (err,result) => {
  //   if (err){
  //     return console.log('Unable to insert Users', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
