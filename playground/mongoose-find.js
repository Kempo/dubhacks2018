//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/DubHacks', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('DubHacks');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5abd5513cf189531b03890e9')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count:${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  // db.collection('Users').find({
  //   name: 'Shwetha'
  // }).count().then((count) => {
  //   console.log(`Users with name Shwetha count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });
  db.collection('Speech').find({
    item: 'glasses'
  }).toArray().then((docs) => {
    //console.log('Item:', Speech[0].item);
    console.log(JSON.stringify(docs,undefined, 2));
  }, (err) => {
    console.log('Unable to fetch item', err)
  });



  //client.close();
});
