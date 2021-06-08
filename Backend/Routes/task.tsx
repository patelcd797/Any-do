const express = require('express')
const Router = express.Router()
const tasks = require('../dbModules/task.tsx')

// add task
//await axios.post('http://localhost:8000/api/task/addTask', {email, task})
Router.post('/addTask', async (req, res) => {
  const taskObject = req.body

  const task = new tasks({
    email: taskObject.email,
    task: taskObject.task,
    list: 'Personal',
    owner: 'Me',
    subTasks: [],
    note: '',
    tag: [],
    checked: false,
  })

  await task.save((err, info) => {
    if (err) return res.json({ success: false })
    return res.json({ success: true })
  })
})

// sending task data based on category(personal, work, grocery list)
//axios.post(`http://localhost:8000/api/task/getCategoryBasedTasks?category=${category.list}`,{ email: category.email },)
Router.post('/getCategoryBasedTasks', (req, res) => {
  const userEmail = req.body.email
  const category = req.query.category

  tasks.find({ email: userEmail, list: category }, (err, tasksList) => {
    if (err) return res.json({ list: [] })
    return res.json({ list: tasksList })
  })
})

// sending task data
Router.post('/getTasks', (req, res) => {
  const email = req.body.email
  tasks.find({ email: email }, (err, tasksList) => {
    if (err) return res.json({ list: [] })
    return res.json({ list: tasksList })
  })
})

module.exports = Router
