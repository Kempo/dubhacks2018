var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
  username: '3e68f27d-60da-473a-9c3a-2418c1c9f3f7',
  password: 'oywycE2PayOW',
  version: '2018-04-05',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/'
});

nlu.analyze(
  {
    text: "left my glasses on the nightstand", // Buffer or String
    features: {
      semantic_roles: {},
      keywords: {}
    }
  },
  function(err, response) {
    if (err) {
      console.log('error:', err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    //  var sentence = response.semantic_roles[0].sentence;
    //  console.log("To restate, this is what you said:",sentence);
      var k1 = response.keywords[0].text;
      console.log(k1);
      var k2 = response.keywords[1].text;
      console.log(k2); //*/

    }
  }
);
