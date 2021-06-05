const mongoose = require('mongoose')

const Task = mongoose.schema({
    email: String,
    task: String,
    list: String,
    owner: String,
    subTasks: [String],
    note: String,
    tag: [String],
    checked: Boolean
})

module.exports = mongoose.model('Task', Task);