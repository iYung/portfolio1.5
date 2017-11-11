var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BackgroundSchema   = new Schema({
    backgroundImg: String
});

module.exports = mongoose.model('Background', BackgroundSchema);