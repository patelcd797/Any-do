import { Add } from '@material-ui/icons'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AddButton, AddtaskContainer, Input } from './Addtask-style'

const initialState = {
  email: '',
  task: ''
}
const userStateInitialValue = {
  name: '',
  email: '',
  password: '',
  taskYouDone: 0,
  taskPending: 0,
  _id: 0,
}

const Addtask = () => {
  const [state, setState] = useState(initialState)
  const location = useLocation()
  const userEmail = location.state
  const [userState, setUserState] = useState(userStateInitialValue)

  useEffect(() => {
    async function fetchData() {
      await axios
        .post('http://localhost:8000/api/user/userData', { email: userEmail })
        .then((res) => {
          if (res.data.user) setUserState(res.data.user)
        })
    }
    fetchData()
  }, [userEmail])

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      email: userEmail,
      task: '',
    }))
  }, [userEmail])

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      task: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    userState.taskPending = userState.taskPending + 1
    await axios.post(`http://localhost:8000/api/user/updateUser`, userState)
    await axios.post('http://localhost:8000/api/task/addTask', state)
    .then(res=>{
        if(res.data.success)
          {setState((prev) => ({
            ...prev,
            task: '',
          }))}
    })
  }

  return (
    <AddtaskContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        name="task"
        value={state.task}
        onChange={handleChange}
        placeholder="I want to..."
        required
      />
      <AddButton type="submit">
        <Add />
      </AddButton>
    </AddtaskContainer>
  )
}

export default Addtask
