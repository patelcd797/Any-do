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
//await axios.post(`http://localhost:8000/api/task/getTasks`, {email: category.email})
Router.post('/getTasks', (req, res) => {
  const email = req.body.email
  tasks.find({ email: email }, (err, tasksList) => {
    if (err) return res.json({ list: [] })
    return res.json({ list: tasksList })
  })
})

// sending task based on id
// await axios.get(`http://localhost:8000/api/task/getTaskById?id=${id}`)
Router.get('/getTaskById', (req, res) => {
  const id = req.query.id
  tasks.findOne({ _id: id }, (err, task) => {
    if (err)
      return res.json({ task: [] })
    return res.json({ task: task })
  })
})

//updating task 
//await axios.post(`http://localhost:8000/api/task/updateTask?id=${task._id}`,task);
Router.post('/updateTask', (req, res) =>{
  const id = req.query.id;
  const Task = req.body;
  tasks.updateOne({ _id: id }, Task, (err, info) => {
    if (err)
      return res.json({
        success: false,
        msg: "something went wrong. try later",
      });
    return res.json({ success: true, msg: "Task successfully updated" });
  });
})

// deleting task based on id
//await axios.delete(`http://localhost:8000/api/task/deleteTask?id=${state._id}`);
Router.delete("/deleteTask", async (req, res) => {
  tasks.deleteOne({ _id: req.query.id }, (err, info) => {
    if (err)
      return res.json({ success: false, msg: "something wrong happens" });
    return res.json({ success: true, msg: "deleted account" });
  });
});

// deleting all tasks of uer 
Router.delete('/delete', async (req,res)=>{
  tasks.deleteMany({email: req.body.email},(err, info) => {
    if (err)
      return res.json({ success: false, msg: "something wrong happens" });
    return res.json({ success: true, msg: "deleted account" });
  });
})

module.exports = Router
