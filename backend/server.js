const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//connect to db
const db = process.env.DB_URI;

mongoose.connect(db, { useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true });

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("Connected to db");
})


//routes
const UserRouter = require("./Routes/User");
const MessageRouter = require("./Routes/Messages");

app.use('/users', UserRouter);
app.use('/messages', MessageRouter);

app.listen(port, () => {
    console.log('Server started on port' + port);
});