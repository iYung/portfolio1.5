var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AchievementSchema   = new Schema({
    name: String,
    date: String,
    text: String,
    year: String
});

module.exports = mongoose.model('Achievement', AchievementSchema);