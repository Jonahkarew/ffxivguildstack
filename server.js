const express = require('express')
const path = require('path');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');

// import routes from './src/routes/api'

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser())

const port = process.env.PORT || 3001;


const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/';
mongoose.Promise = Promise;
mongoose.connect(mongoUri, { useNewUrlParser: true });

app.get('/', (req, res) => {
    return res.end('Api is working')
})


const routes = require('./src/routes')
app.use(routes);

app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page not found</h2>')
})

app.listen(port,() => {
    console.log(`app is listening on port: ${port}`)
})