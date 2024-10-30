require('dotenv').config();
const express = require('express');

const app = express();


app.use(express.json());


app.get('/', (req, res) => {
    return res.json ({name: "server"});
})


app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));