const mongoose = require('mongoose');
const Kitty = require('../models/kitty');

const all = (res) => {
    return mongoose.model('Kitty').find({});
};

const get = (id) => {
    return mongoose.model('Kitty').findOne({ _id: id });
};


const remove = (id) => {
    console.log('remove');
    return mongoose.model('Kitty').findOneAndRemove({ _id: id });
};

const add = () => {
    const newKitty = new Kitty({ name: 'new Omg ' + Math.random() });
    return newKitty.save();
};

module.exports = {
    all: all,
    get: get,
    add: add,
    remove: remove
};