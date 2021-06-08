const express = require("express");
const PORT = 8000;
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const cors = require('cors')

// building server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// connecting data base

const db = 'mongodb+srv://Any-do:Any-do_123@cluster0.kizw3.mongodb.net/data?retryWrites=true&w=majority';
mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log('database connected');
})
.catch(()=>{
  console.log('database connection failed');
})

// default request header
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PUT, PATCH"
  );
  next();
});

// routes for different request 
const userRoute = require('./Routes/user.tsx')
const taskRoute = require('./Routes/task.tsx')
app.use('/api/user', userRoute);
app.use('/api/task', taskRoute);


app.listen(PORT, ()=>{
  console.log(`server listening at ${PORT}`);
})
