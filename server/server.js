const express = require('express');
const mongoose = require('mongoose')
const app = express();
const path = require('path');
const userController = require('./controllers/userController')
const dataController = require('./controllers/dataController')

const PORT = 3000;
const mongoURI = 'mongodb://localhost/budgetcalculator'

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})

app.use(express.json())

/* -------------------------- Serve Static Assets -------------------------- */
if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

/* -------------------------- Signup & Login Routes ------------------------- */

app.post('/user/login', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.userID)
})

app.post('/user/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.userID)
})

/* ------------------------ Data Creation & Retrieval ----------------------- */

app.post('/data', dataController.saveData, (req, res) => {
  res.status(200).json('Data successfully saved')
})

app.get('/data', dataController.getData, (req, res) => {
  res.status(200).json(res.locals.data)
})

/* ------------------------------- 404 Handler ------------------------------ */
app.use('*', (req, res) => {
  res.status(404).send('Server: Not Found');
});

/* -------------------------- Global Error Handler -------------------------- */
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Error in global error handler',
    msg: 'There was an error'
  }
  // const err = Object.assign({}, defaultError, {err})
  console.log(err);
  res.status(500).send('Internal Server Error');
});

/* ----------------------------- Listen on PORT ----------------------------- */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});