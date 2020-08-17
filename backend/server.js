const express = require('express');
const cors = require('cors');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

//connect to db
const db = process.env.DB_URI;

mongoose.connect(db, { useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true });

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("Connected to db");
})

connection.on("error", console.error.bind(console, "mongo connection error"));

//routes
const UserRouter = require("./Models/user.model");
const MessageRouter = require("./Models/message.model");

app.use('/users', UserRouter);
app.use('/messages', MessageRouter);

app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));


app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log("Connected to server");
});