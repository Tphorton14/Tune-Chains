    require("dotenv").config();
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require("./routes");
const aws = require('aws-sdk');

const app = express();
app.set('views', './views');
app.use(express.static('./public'));
app.engine('html', require('ejs').renderFile);
app.listen(process.env.PORT || 3000);





const PORT = process.env.PORT || 3001;

const app = express();

// Requiring our models for syncing
var db = require("./models");

const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")));
}
var SpotifyWebApi = require('spotify-web-api-node');



// Add routes, both API
app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/build"));
    })
}

app.get('/sign_s3', require('react-s3-upload/S3Sign')({
    S3_BUCKET:'tunechains', 
    unique: true
  }));

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});