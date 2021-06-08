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

  await task.save((err,info)=>{
      if(err)
       return res.json({success: false})
      return res.json({success: true}) 
  })

})


module.exports = Router