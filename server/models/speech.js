var mongoose = require('mongoose');

var speech = mongoose.model('Speech', {
  item: {
    type: String,
    required: true,
},
  location: {
    type: String,
    required: true,
    minlength: 1,
},
  time:{
    type: String,
    required: true,
});

module.exports = {Speech};
