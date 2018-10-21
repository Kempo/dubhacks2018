//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/DubHacks', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('DubHacks');

// //findOneAndUpdate
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID("5ac785d0ac22f3db66d4e5ef")
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   })

// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID('5abd55f2a9ac623054622b5f')
// }, {
//   $set: {
//     name: 'Shwetha'
//   },
//   $inc: {
//     age: 1
//   }
// }, {
//     returnOriginal: false
// }).then(result) => {
//   console.log(result);
// });

db.collection('Speech').findOneAndUpdate({
  _id: new ObjectID("5abd55f2a9ac623054622b5f")
}, {
  $set: {
    completed: true
  },
  $inc: {
    age: 1
  }
}, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  //client.close();
});
