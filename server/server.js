const express = require('express')
const path = require('path');
const mongoose = require('mongoose');

// import routes from './src/routes/api'

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const port = process.env.PORT || 3001;

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/google-books-db', { useUnifiedTopology: true, useNewUrlParser: true });

app.get('/', (req, res) => {
    return res.end('Api is working')
})

// api.use('/api', routes);

app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page not found</h2>')
})

app.listen(port,() => {
    console.log(`app is listening on port: ${port}`)
})