const mongoose = require('mongoose');
const routes = require('express').Router();
const controllers = require('../controllers');

routes.get('/kitties', async (req, res) => {
    try {
        const kittens = await controllers.kitty.all();
        res.send(kittens);
    } catch (err) {
        res.status(500).send(err);
    }
});

routes.get('/kitties/:kittyId', async (req, res) => {
    try {
        const kittens = await controllers.kitty.get(req.params.kittyId);
        res.send(kittens);
    } catch (err) {
        res.status(500).send(err);
    }
});


routes.post('/kitties', async (req, res) => {
    try {
        const newKitty = await controllers.kitty.add();
        res.status(201).send(newKitty);
    } catch (err) {
        res.status(500).send(err);
    }
});


routes.delete('/kitties/:kittyId', async (req, res) => {
    try {
        const deletedKitty = await controllers.kitty.remove(req.params.kittyId);

        if (!deletedKitty) {
            res.status(404).send(new MyError('Not Found Error', ['Kitty with id ' + req.params.kittyId + ' not found']));
        } else {
            res.status(204).send('Kitty successfully deleted');
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = routes;