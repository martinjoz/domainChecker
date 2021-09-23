const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set ejs Engine
app.set("view engine", "ejs");

//PORT SETTINGS
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 8080;

//LOAD ASSETS
app.use("/css", express.static(path.resolve(__dirname, "./assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "./assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "./assets/js")));


//LOAD Routers
app.use('/', require('./server/routes/router'));



//404 PAGE NOT FOUND
app.use((req, res) => {
    res.sendFile('./404.html', { root: __dirname });
});


app.listen(PORT);