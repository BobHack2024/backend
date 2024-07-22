const { createServer } = require("http");
const express = require("express");
const cors = require("cors");
const ConnectToDb = require("./mongodb/mongo_connect");
//const clientRoutes = require('./routes/client');
const adminRoutes = require('./routes/admin');

const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


require('dotenv').config()

ConnectToDb();

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'dist')));




const httpServer = createServer(app);

const corsOptions = {
  origin: '*', // This should be the URL of your front-end app
};

// Use CORS with the above options
app.use(cors(corsOptions));
app.get('/', (req, res) => {
  // Send the response with a JSON object containing the "message"
  res.json({ message: '!welcome home njnfbjbjfff1scscscjnjnshbjhbcjdddd0mj1' });
});

app.use('/api/admin', adminRoutes);

const port = 5000;


httpServer.listen(port, () => {
    console.log(`Server Started at ${port}`)
})


