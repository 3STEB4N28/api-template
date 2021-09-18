require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Server Started');
});