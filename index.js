const express = require('express');
const mongoose = require('mongoose');
const Answer1Router = require('./Routes/Answer1Route');
const Answer2Router = require('./Routes/Answer2Route');

const app = express();

mongoose.connect('mongodb+srv://Gowtham:abcd1234@labexam.92posml.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
    console.log('Database is connected');
  });

app.use('/api/a1', Answer1Router);
app.use('/api/a2', Answer2Router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
