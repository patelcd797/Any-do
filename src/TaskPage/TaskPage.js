import React, { useState, useEffect } from "react";
import {
  CloseButton,
  Modal,
  ModalDivContainer,
  H1,
  AddTagButton,
  Select,
  Option,
  Label,
  ListContainer,
  Input,
  H2,
  AddSubTaskButton,
  NotesButton,
  DeleteTaskButton,
  Form,
  TagDisplayContainer,
  TagButton,
  SubTaskElement,
  SubTaskInput,
  NotesContent,
  Header,
  Div,
  ModalContainer,
} from "./TaskPage-style";
import Tag from "./Tag";
import NoteModal from "./NoteModal";
import axios from "axios";

const initialState = {
  email: "",
  task: "",
  list: "Personal",
  owner: "Me",
  subTasks: [],
  note: "",
  tag: [],
  checked: false,
  id: 1,
};

function TaskPage(props) {
  const [state, setState] = useState(initialState);
  const [tagFlag, setTagFlag] = useState(false);
  const [subTask, setSubTask] = useState("");
  const [noteFlag, setNoteFlag] = useState(false);
  const [userState, setUserState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:8000/api/task/getTaskById?id=${props.id}`)
        .then((res) => {
          setState(res.data.task);
        });
      await axios
        .post("http://localhost:8000/api/user/userData", { email: props.email })
        .then((res) => {
          setUserState(res.data.user);
        });
    }
    fetchData();
  }, [props.id]);

  useEffect(() => {
    console.log(state);
  });

  const handleAddTag = () => {
    setTagFlag(true);
  };

  const handleListChange = (e) => {
    setState((prev) => ({
      ...prev,
      list: e.target.value,
    }));
  };

  const handleOwnerChange = (e) => {
    setState((prev) => ({
      ...prev,
      owner: e.target.value,
    }));
  };

  const handleInputChange = (e) => {
    setSubTask(e.target.value);
  };

  const handleAddSubTask = (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      subTasks: [...prev.subTasks, subTask],
    }));
    setSubTask("");
  };

  const handleNoteButtonClick = () => setNoteFlag(true);

  const handleSaveModal = async (e) => {
    props.CloseModal();
    await axios.post(
      `http://localhost:8000/api/task/updateTask?id=${state._id}`,
      state
    );
  };

  const handleDelete = async (e) => {
    props.CloseModal();
    if (!state.checked) {
      setUserState((prev) => ({
        ...prev,
        taskPending: prev.taskPending - 1,
      }));
      userState.taskPending = userState.taskPending - 1;
    }
    axios.post(`http://localhost:8000/api/user/updateUser`, userState);
    await axios.delete(
      `http://localhost:8000/api/task/deleteTask?id=${state._id}`
    );

    props.setRend((prev) => !prev);
  };

  return (
    <Modal>
      <ModalDivContainer>
        <Header>
          <H2 color="#1485E1">Task Details</H2>
          <CloseButton type="button" onClick={handleSaveModal}>
            Save
          </CloseButton>
        </Header>
      </ModalDivContainer>
      <ModalContainer>
        <ModalDivContainer>
          <H1>{state.task}</H1>
        </ModalDivContainer>
        <ModalDivContainer>
          <AddTagButton type="button" onClick={handleAddTag}>
            Add Tag
          </AddTagButton>
          {tagFlag && <Tag tags={state.tag} setTagFlag={setTagFlag} />}
          <TagDisplayContainer>
            {state.tag.map((item) => {
              return <TagButton backgroundColor={item} />;
            })}
          </TagDisplayContainer>
        </ModalDivContainer>
        <ListContainer>
          <ModalDivContainer>
            <Label>LIST</Label>
            <Select name="list" onChange={handleListChange} value={state.list}>
              <Option>Personal</Option>
              <Option>Work</Option>
              <Option>Grocery List</Option>
            </Select>
          </ModalDivContainer>
          <ModalDivContainer>
            <Label>OWNER</Label>
            <Select
              name="owner"
              onChange={handleOwnerChange}
              value={state.owner}
            >
              <Option>Me</Option>
              <Option>Employee</Option>
              <Option>Friend</Option>
            </Select>
          </ModalDivContainer>
        </ListContainer>
        <ModalDivContainer>
          <H2>SUBTASKS</H2>
          {state.subTasks.map((item) => {
            return (
              <SubTaskElement>
                <Div>{item}</Div>
                <SubTaskInput type="checkbox" />
              </SubTaskElement>
            );
          })}
          <Form onSubmit={handleAddSubTask}>
            <Input
              type="text"
              name="subTask"
              onChange={handleInputChange}
              value={subTask}
              placeholder="Add a new subTask"
              required
            />
            <AddSubTaskButton type="submit">+</AddSubTaskButton>
          </Form>
        </ModalDivContainer>
        <ModalDivContainer>
          <H2>NOTES</H2>
          {state.note.length > 0 && <NotesContent>{state.note}</NotesContent>}
          <NotesButton type="button" onClick={handleNoteButtonClick}>
            Tap to add Note
          </NotesButton>
          {noteFlag && (
            <NoteModal
              notes={state.note}
              setNoteFlag={setNoteFlag}
              setState={setState}
            />
          )}
        </ModalDivContainer>
        <ModalDivContainer>
          <DeleteTaskButton type="button" onClick={handleDelete}>
            Delete Task
          </DeleteTaskButton>
        </ModalDivContainer>
      </ModalContainer>
    </Modal>
  );
}

export default TaskPage;
