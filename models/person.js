var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number/*,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]*/
});

module.exports = mongoose.model('Person', personSchema);