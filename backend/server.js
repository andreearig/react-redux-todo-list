const express = require("express");
const path = require('path');
const cookieParser = require("cookie-parser");
const MongoClient = require("mongodb").MongoClient;
const todo = require('./routes/todoRoutes');
const auth = require('./routes/authRoutes');
const cors = require('cors');

var app = express();

const PORT = process.env.PORT || 8080;
const uri =
  process.env.URI;
const client = new MongoClient(
  uri,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 }
);

client.connect(() => {
  console.log("connect");
  db = client.db("nodeproject");
  
  app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.get("/", (req, res) => {
    res.json({
        message: "home",
    });;
  });
  app.get("/login", (req, res) => {
    res.json({
        message: "login",
       
    });;
  });

  app.use(auth);
  app.use(todo);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});