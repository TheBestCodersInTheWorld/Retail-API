const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const retailController = require('./controllers/controller');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => { response.json({ info: 'server is online' }) });

app.post('/getStoreSalesInState', retailController.getStoreSalesInState); // get store sales in specified state

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

module.exports = app;
