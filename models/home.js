var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var HomeSchema   = new Schema({
    title: String,
    image: String,
    text: String
});

module.exports = mongoose.model('Home', HomeSchema);