const mongoose = require('mongoose');
const Person = require('../models/person');

const all = (res) => {
    return mongoose.model('Story').find({}).populate('author', 'name').exec();
};

const get = (id) => {
    return mongoose.model('Story').findOne({ _id: id }).populate('author', 'name').exec();
};


const remove = (id) => {
    console.log('remove');
    return mongoose.model('Kitty').findOneAndRemove({ _id: id });
};

const add = (typeId) => {
    console.log('NEW PLANET');
    const newKitty = new Planet({ name: 'new planet ' + Math.random(), planetType: typeId });
    return newKitty.save();
};

module.exports = {
    all: all,
    get: get,
    add: add,
    remove: remove
};