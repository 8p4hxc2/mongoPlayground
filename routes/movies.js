const mongoose = require('mongoose');
const routes = require('express').Router();
const controllers = require('../controllers');
const Person = require('../models/person');
const Story = require('../models/movie');

routes.get('/movies', async (req, res) => {
    try {
        const movies = await controllers.movie.all();
        res.send(movies);
    } catch (err) {
        res.status(500).send(err);
    }
});

routes.get('/movies/:id', async (req, res) => {
    try {
        const movie = await controllers.movie.get(req.params.id);
        res.send(movie);
    } catch (err) {
        res.status(500).send(err);
    }
});

routes.post('/movies', async (req, res) => {
    /*console.log('WHUTT');
    try {
        const newPlanet = await controllers.planets.add(req.params.typeId);
        res.status(201).send(newPlanet);
    } catch (err) {
        res.status(500).send(err);
    }*/

    /*var author = new Person({
        _id: new mongoose.Types.ObjectId(),
        name: 'Omfg',
        age: 504
    });

    author.save(function (err) {*/
    /*if (err) return handleError(err);
*/
    var story1 = new Story({
        title: 'Casino Royale AAAAA',
        author: "5bbf4909ff544815a01cf554"    // assign the _id from the person
    });

    story1.save(function (err) {
        if (err) return handleError(err);
        // thats it!
        res.status(201).send({});
    });
    //});
});

module.exports = routes;