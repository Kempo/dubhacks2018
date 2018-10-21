//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');

var speechToText = new SpeechToTextV1({
    username: '973ac577-c5ce-4a22-9bb6-b3d47f508bce',
    password: 'JJLWv6G5XFFJ',
    url: 'https://stream.watsonplatform.net/speech-to-text/api'
  });

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
    username: '3e68f27d-60da-473a-9c3a-2418c1c9f3f7',
    password: 'oywycE2PayOW',
    version: '2018-04-05',
    url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/'
});


var params = {
    objectMode: true,
    'content_type': 'audio/wav',
    model: 'en-US_BroadbandModel',
    keywords: [''],
    'keywords_threshold': 0.5,
    'max_alternatives': 2
};

// Create the stream.
var recognizeStream = speechToText.recognizeUsingWebSocket(params);

// Pipe in the audio.
fs.createReadStream("C:/Users/SHWETHASivakumar/Documents/DubHacks2018/dubhacks2018/glassesinnighstand.wav").pipe(recognizeStream);

/*
 * Uncomment the following two lines of code ONLY if `objectMode` is `false`.
 *
 * WHEN USED TOGETHER, the two lines pipe the final transcript to the named
 * file and produce it on the console.
 *
 * WHEN USED ALONE, the following line pipes just the final transcript to
 * the named file but produces numeric values rather than strings on the
 * console.
 */
 //recognizeStream.pipe(fs.createWriteStream('transcription.txt'));

/*
 * WHEN USED ALONE, the following line produces just the final transcript
 * on the console.
 */
// recognizeStream.setEncoding('utf8');

// Listen for events.
recognizeStream.on('data', function(event) { onEvent('Data:', event); });
recognizeStream.on('error', function(event) { onEvent('Error:', event); });
recognizeStream.on('close', function(event) { onEvent('Close:', event); });

//fs.createWriteStream('output.txt');
//recognizeStream.pipe(fs.createWriteStream('transcription.txt'));
// Display events on the console.

function onEvent(name, event) {
   //console.log(name, JSON.stringify(event, null, 2));

if (typeof event.results !== 'undefined' && event.results !== null){
  console.log(event.results[0].keywords_result);
  //var kw = event.results[0].keywords_result.hello[0].normalized_text;
  var result = event.results[0].alternatives[0].transcript;
  //console.log("Keyword is:", kw);
  console.log("Alternative transcript is:", result);

  nlu.analyze(
    {
      text: event.results[0].alternatives[0].transcript,
      //event.results[0].alternatives[0].transcript, // Buffer or String
      features: {
        semantic_roles: {},
        keywords: {}
      }
    },
    function(err, response) {
      if (err) {
        console.log('error:', err);
      } else {
        //console.log(JSON.stringify(response, null, 2));
      //  var sentence = response.semantic_roles[0].sentence;
      //  console.log("To restate, this is what you said:",sentence);
        var k1 = response.keywords[0].text;
        console.log(k1);
        var k2 = response.keywords[1].text;
        console.log(k2); //*/
        var currentDate = new Date();
        //console.log('current date:',currentDate);

        MongoClient.connect('mongodb://localhost:27017/DubHacks', (err, client) => {
          if (err) {
            console.log('Unable to connect to MongoDB server');
          }
          console.log('Connected to MongoDB server');
          const db = client.db('DubHacks');

          db.collection('Speech').insertOne({
            item:k1,
            location: k2,
            date: currentDate
          }, (err,result) => {
            if (err) {
              return console.log('Unable to insert item', err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
          })

          db.collection('Speech').find({
            item: 'glasses',
            //date: '2018-10-21T17:14:14.271Z'
          }).toArray().then((docs) => {
            //console.log('Item:', Speech[0].item);
            console.log(docs[docs.length - 1]);
          //  console.log(location);
            //console.log(JSON.stringify(docs, undefined, 2));
            //console.log(docs['']);


            for (var key in docs)
                {
                   if (docs.hasOwnProperty(key))
                   {
                      var i = docs[key].item;
                      var l = docs[key].location;
                      var d = docs[key].date;
                      //console.log(i);
                      //console.log(l);
                      //console.log(d);
                   }
                }

          }, (err) => {
            console.log('Unable to fetch item', err)
          });


          client.close();
        });
      }
    }
  );

}

   //{ results:
   //[ { keywords_result: [Object], alternatives: [Array], final: true } ],

};
