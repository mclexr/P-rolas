var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PearlSchema   = new Schema({
    when : Date,
    who: String,
    for: String,
    pearl: String

});

module.exports = mongoose.model('Pearl', PearlSchema);
