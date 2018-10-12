/*const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://localhost:27017'


const start = async () => {
    //ry {
    //const db = await MongoClient.connect(MONGO_URL);
    //const dbo = db.db('mydb');
    /*dbo.createCollection("customers2", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });*/

//dbo.collection("customers2").drop();

/*var myobj = { name: "Company Inc", address: "Highway 37" };
dbo.collection("customers").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
});*/
/*}
catch (e) {
    console.log(e);
}
};

start();*/

const mongoose = require('mongoose');
const app = require('express')();

const routes = require('./routes/kitty');
const routesBis = require('./routes/movies');

// load models
require('./models/kitty');
require('./models/movie');
require('./models/person');

// load config
const config = require('./config');

// mongoose connection
mongoose.connect(config.database);

/*app.use((req, res, next) => {
    console.log('omg');
    next();
});*/

app.use(routes);
app.use(routesBis);

app.listen(config.server.port, () => {
    console.log(`Visit ${config.server.url}:${config.server.port}`);
});