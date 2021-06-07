import React, { useState, useEffect } from "react";
import {
  Div,
  ProfileContainer,
  ProfileHeader,
  Button,
  Form,
  Input,
  FormDiv,
  ErrorStyle,
  ProfileBody,
} from "./Profile-style";
import { useHistory, useLocation } from "react-router-dom";
import { user } from "../db.json";
import axios from "axios";
import { Create, Done } from "@material-ui/icons";

const initialPasswordState = {
  oPassword: "",
  nPassword: "",
  cPassword: "",
};

const Profile = () => {
  const history = useHistory();
  const location = useLocation();
  const userEmail = location.state;
  const [state, setState] = useState([]);
  const [nameChangeFlag, setNameChangeFlag] = useState(true);
  const [password, setPassword] = useState(initialPasswordState);
  const [passwordFlag, setPasswordFlag] = useState(false);
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");

  useEffect(async () => {
    await axios
      .post("http://localhost:8000/api/user/userData", { email: userEmail })
      .then((res) => {
        if (res.data.user) setState(res.data.user);
      });
  }, [userEmail]);

  const handleInputChange = async (e) => {
    const attr = e.target.name;
    const value = e.target.value;
    setState((prev) => ({
      ...prev,
      [attr]: value,
    }));
  };

  const handleNameChange = (e) => setNameChangeFlag(false);
  const handleNameDone = async (e) => {
    setNameChangeFlag(true);
    await axios.post(`http://localhost:8000/api/user/updateUser`, state)
  };

  const handlePasswordChange = (e) => {
    const attr = e.target.name;
    const value = e.target.value;
    setPassword((prev) => ({
      ...prev,
      [attr]: value,
    }));
  };

  const handleRestPassword = () => setPasswordFlag(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.oPassword !== state.password) {
      setError("");
      setError1("Old password is wrong");
    } else setError1("");

    if (password.nPassword.length < 6) {
      setError("");
      setError2("new password length < 6");
    } else setError2("");

    if (password.nPassword !== password.cPassword) {
      setError("");
      setError3("New password not match");
    } else setError3("");
    if (!error1 && !error2 && !error2) {
      await axios
        .post(
          `http://localhost:8000/api/user/resetPassword?id=${state._id}`,
          password
        )
        .then((res) => {
          if (res.data.success) {
            setPassword(initialPasswordState);
            setPasswordFlag(false);
          }
          setError("something went wrong. try late");
        });
    }
  };
  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:8000/api/user/delete?email=${userEmail}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) history.push("/login");
        else console.log(res.data.msg);
      });
  };
  const handleSignOut = () => history.push("/login");

  return (
    <ProfileContainer>
      <ProfileHeader>Profile</ProfileHeader>
      <ProfileBody>
        <Div>
          <Input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
            readOnly={nameChangeFlag}
          />
          {!nameChangeFlag && <Done onClick={handleNameDone} />}
          {nameChangeFlag && <Create onClick={handleNameChange} />}
        </Div>
        <Div>
          <Input type="email" name="email" value={state.email} readOnly />
        </Div>
        <Div>Task you done: {state.taskYouDone} </Div>
        <Div>Task Pending: {state.taskPending}</Div>
        <Div onClick={handleRestPassword}>Reset Password</Div>
        {passwordFlag && (
          <Div>
            <Form onSubmit={handleSubmit}>
              <FormDiv>
                <Input
                  type="password"
                  name="oPassword"
                  value={password.oPassword}
                  onChange={handlePasswordChange}
                  placeholder="Old Password"
                />
                {error1 && <ErrorStyle>{error1}</ErrorStyle>}
              </FormDiv>
              <FormDiv>
                <Input
                  type="password"
                  name="nPassword"
                  value={password.nPassword}
                  onChange={handlePasswordChange}
                  placeholder="New Password"
                />
                {error2 && <ErrorStyle>{error2}</ErrorStyle>}
              </FormDiv>
              <FormDiv>
                <Input
                  type="password"
                  name="cPassword"
                  value={password.cPassword}
                  onChange={handlePasswordChange}
                  placeholder="Confirm Password"
                />
                {error3 && <ErrorStyle>{error3}</ErrorStyle>}
              </FormDiv>
              <Button type="submit">Save</Button>
            </Form>
          </Div>
        )}
        <Div onClick={handleDelete}>Delete Account</Div>
        <Div onClick={handleSignOut}>Sign Out</Div>
      </ProfileBody>
    </ProfileContainer>
  );
};

export default React.memo(Profile);
