require('dotenv').config();
const express = require('express');
const mongodb = require('./utils/mongodb-util');
const router = require('./routes');

const app = express();


app.use(express.json());


app.use(router);



app.listen(process.env.PORT, async () => {
    await mongodb();
    console.log(`> Server started on port ${process.env.PORT}`)}
);