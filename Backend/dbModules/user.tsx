const mongoose = require('mongoose')

let user = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    taskYouDone: Number, 
    taskPending: Number
})

module.exports = user = mongoose.model('user', user)