const fs = require('fs');

// Imports the Google Cloud client library
const speech = require('@google-cloud/speech').v1p1beta1;

// Creates a client
const client = new speech.SpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const fileName = 'C:/Users/SHWETHASivakumar/opendoor.wav';

const config = {
  encoding: `LINEAR16`,
  languageCode: `en-US`,
  audioChannelCount: 2,
  enableSeparateRecognitionPerChannel: true,
};

const audio = {
  content: fs.readFileSync(fileName).toString('base64'),
};

const request = {
  config: config,
  audio: audio,
};

client
  .recognize(request)
  .then(data => {
    const response = data[0];
    const transcription = response.results
      .map(
        result =>
          ` Channel Tag: ` +
          result.channelTag +
          ` ` +
          result.alternatives[0].transcript
      )
      .join('\n');
    console.log(`Transcription: \n${transcription}`);
  })
  .catch((e) => {
      console.log('Error:', e);
  });
