import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import TaskPage from '../TaskPage/TaskPage'
import {
  BackButton,
  CategoryHeader,
  CategoryTitle,
  TaskCategoryModalContainer,
  TaskContainer,
  TaskList,
  Input,
  Div,
} from './TaskCategoryModal-style'
import axios from 'axios'
function TaskCategoryModal() {
  const history = useHistory()
  const location = useLocation()
  const category = location.state
  const [modalFlag, setModalFlag] = useState(false)
  const [id, setId] = useState(0)
  const [state, setState] = useState([])

  useEffect(() => {
    async function fetchData() {
      if (category.list !== 'All Task') {
        await axios
          .post(
            `http://localhost:8000/api/task/getCategoryBasedTasks?category=${category.list}`,
            { email: category.email },
          )
          .then((res) => {
            setState(res.data.list)
          })
      } else {
        await axios
          .post(`http://localhost:8000/api/task/getTasks`, {
            email: category.email,
          })
          .then((res) => {
            setState(res.data.list)
          })
      }
    }
    fetchData()
  }, [category.email, category.list])

  const handleClick = (e) => {
    const idd = e.target.id
    setId(idd)
    setModalFlag(true)
  }
  const CloseModal = () => {
    setModalFlag(false)
  }

  const handleClose = () => {
    history.push({
      pathname: '/home',
      state: category.email,
    })
  }

  return (
    <TaskCategoryModalContainer>
      <CategoryHeader>
        <CategoryTitle>{category.list}</CategoryTitle>
        <BackButton type="button" onClick={handleClose}>
          X
        </BackButton>
      </CategoryHeader>
      <TaskContainer>
        {modalFlag && <TaskPage id={id} CloseModal={CloseModal} />}
        {state.map((item) => {
          return (
            <>
              <TaskList>
                <Div onClick={handleClick} id={item.id}>
                  {item.task}
                </Div>
                <Input type="checkbox" />
              </TaskList>
            </>
          )
        })}
      </TaskContainer>
    </TaskCategoryModalContainer>
  )
}

export default TaskCategoryModal
