const express = require('express')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
  }

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/';
mongoose.Promise = Promise;
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const routes = require('./src/routes')
app.use(routes);

app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page not found</h2>')
})

app.listen(port,() => {
    console.log(`app is listening on port: ${port}`)
})