import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TaskContainer, TaskList, Input, Div } from "./Task-style";
import { tasks } from "../db.json";
import TaskPage from "../TaskPage/TaskPage";
import { user } from "../db.json";

const Task = () => {
  const [state, setState] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [id, setId] = useState(0);
  const location = useLocation();
  const userEmail = location.state;
  const userObject = user.filter((d) => d.email === userEmail);
  const [userState, setUserState] = useState(userObject[0]);

  useEffect(() => {
    const dbObject = tasks.filter((task) => task.email === userEmail);
    setState(dbObject);
  }, [state.task, userEmail]);

  const handleClick = (e) => {
    const idd = e.target.id;
    setId(idd);
    setModalFlag(true);
  };
  const CloseModal = () => {
    setModalFlag(false);
  };

  const handleChange = async (e) => {
    const dbObject = state.filter((d) => d.id === e.target.id);
    dbObject[0].checked = !dbObject[0].checked;
    if (dbObject[0].checked) {
      userState.taskPending = userState.taskPending - 1;
      userState.taskYouDone = userState.taskYouDone + 1;
    } else {
      userState.taskPending = userState.taskPending + 1;
      userState.taskYouDone = userState.taskYouDone - 1;
    }
    await axios.put(`http://localhost:3334/user/${userState.id}`, userState);
    await axios.put(
      `http://localhost:3334/tasks/${dbObject[0].id}`,
      dbObject[0]
    );
  };

  return (
    <TaskContainer>
      {modalFlag && <TaskPage id={id} CloseModal={CloseModal} />}
      {state.map((item) => {
        return (
          <>
            <TaskList>
              <Div onClick={handleClick} id={item.id}>
                {item.task}
              </Div>
              <Input
                type="checkbox"
                id={item.id}
                checked={item.checked}
                onChange={handleChange}
              />
            </TaskList>
          </>
        );
      })}
    </TaskContainer>
  );
};

export default Task;
