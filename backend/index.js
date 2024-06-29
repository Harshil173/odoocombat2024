const express = require("express");
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require("./helper/passport");
const authRoutes = require("./routes/authRoutes");
const apiRoutes = require("./routes/apiRoutes")

const app = express()
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
dotenv.config();
app.use(cors({ origin: "http://localhost:3001", credentials: true }))

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.error('Error connecting to MongoDB', error);
});

//port for server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

//server setup
app.listen(port, function (){
    console.log("server started");
})

app.get("/", function(req, res){
    res.render("home", {appTitle: "hello there"});
})

app.use("/auth", authRoutes);
app.use("/api", apiRoutes);