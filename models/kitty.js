const mongoose = require('mongoose');

const Kitty = mongoose.model('Kitty', new mongoose.Schema(
    {
        name: String
    }
));


module.exports = Kitty;