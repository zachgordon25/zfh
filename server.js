// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;





// CONNECT TO MONGO
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ZFH'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
  console.log('connected to mongo database')
});

// CHECK TO SEE IF RUNNING
app.get('/', (req, res) => {
  res.send('app is running')
});

// EXPRESS LISTENER
app.listen(PORT, () => console.log('Listening on port:', PORT));