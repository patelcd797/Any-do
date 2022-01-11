import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TaskContainer, TaskList, Input, Div } from "./Task-style";
import TaskPage from "../TaskPage/TaskPage";

const Task = (props) => {
  const [state, setState] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [id, setId] = useState(0);
  const location = useLocation();
  const userEmail = location.state;
  const [userState, setUserState] = useState({});
  const [rend, setRend] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .post("http://localhost:8000/api/user/userData", { email: userEmail })
        .then((res) => {
          if (res.data.user) setUserState(res.data.user);
        });
    }
    fetchData();
  }, [userEmail]);

  async function getTasks() {
    await axios
      .post(`http://localhost:8000/api/task/getTasks`, { email: userEmail })
      .then((res) => {
        setState(res.data.list);
      });
      await axios
        .post("http://localhost:8000/api/user/userData", { email: userEmail })
        .then((res) => {
          if (res.data.user) setUserState(res.data.user);
        });
  }

  useEffect(() => {
    getTasks();
    setRend((prev) => prev);
  }, [rend, props.taskChange]);

  const handleClick = (e) => {
    const idd = e.target.id;
    setId(idd);
    setModalFlag(true);
  };
  const CloseModal = () => {
    setModalFlag(false);
  };

  const handleChange = async (e) => {
    var task;
    await axios
      .get(`http://localhost:8000/api/task/getTaskById?id=${e.target.id}`)
      .then((res) => {
        task = res.data.task;
      });
    if (task.checked) task.checked = false;
    else task.checked = true;
    if (task.checked) {
      userState.taskPending = userState.taskPending - 1;
      userState.taskYouDone = userState.taskYouDone + 1;
    } else {
      userState.taskPending = userState.taskPending + 1;
      userState.taskYouDone = userState.taskYouDone - 1;
    }

    await axios.post(`http://localhost:8000/api/user/updateUser`, userState);
    await axios
      .post(`http://localhost:8000/api/task/updateTask?id=${task._id}`, task)
      .then((res) => {
        setRend((prev) => !prev);
      });
  };

  return (
    <TaskContainer>
      {modalFlag && (
        <TaskPage id={id} setRend={setRend} email={userEmail} CloseModal={CloseModal} />
      )}
      {state.map((item) => {
        return (
          <>
            <TaskList>
              <Div onClick={handleClick} id={item._id}>
                {item.task}
              </Div>
              <Input
                type="checkbox"
                id={item._id}
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
