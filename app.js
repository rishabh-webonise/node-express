require('dotenv').config(); //FOR ENVIRONMENT VARIABLES

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const logger = (req, res, next) => {
  console.log(new Date().toTimeString());
  next();
};
app.use(logger);

// Routes
app.get('/', (req, res) => {
  res.send('Hello world!!');
});

app.use('/emp', require('./routes/empRoute'));

app.get('/add', (req, res) => {
  res.json({
    title: 'Add data here',
    body: 'some data',
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(PORT, () => console.log('Server listening on PORT ' + PORT));
