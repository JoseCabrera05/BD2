const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017';
const dbName = 'tienda_deportes';

app.use(cors());

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
    const balonesCollection = db.collection('balones');

    app.get('/balones', (req, res) => {
        balonesCollection.find({}).toArray((err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });

    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
});
