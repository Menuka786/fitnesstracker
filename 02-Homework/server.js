
//Dependencies

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");

//setting up Express App

const PORT = process.env.PORT || 3000;

const app = express();
app.use (morgan ("dev"));

//set up the Express app to handle data parsing


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//db mongo

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

  //creating Routes 

require("./routes/apiroutes") (app);
require("./routes/htmlroutes")(app);

//Start the server to begin listening

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});