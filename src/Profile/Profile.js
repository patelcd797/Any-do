import React, {useState, useEffect} from 'react'
import { Div, ProfileBodyContainer, ProfileContainer, 
         ProfileDetailContainer, ProfileDetailEditContainer, 
         ProfileHeader, H3, Button, Form, Label, Input, ClearButton,
         FormDiv, ErrorStyle, FormMainDiv } from './Profile-style'
import {useHistory, useLocation, Link} from 'react-router-dom';
import {user} from '../db.json';
import axios from 'axios';


const initialState = {
    email: '',
    name: '',
    password: '',
    id: 1,
    confirmpassword: ''
}

const initialEditState = {
    name: '',
    oldpassword: '',
    newpassword: '',
    confirmpassword: ''
}

const Profile = () =>{

    const history = useHistory();
    const location = useLocation();
    const userEmail = location.state;
    const [state, setState] = useState(initialState);
    const [formFlag, setFormFlag] = useState(false);
    const [changePassowrdFlag, setChangePasswordFlag] = useState(false);
    const [editState, setEditState] = useState(initialEditState);
    const [error1, setError1] =useState('');
    const [error2, setError2] =useState('');
    const [error3, setError3] =useState('');

          
    useEffect( () =>{
        const dbObject = user.filter( db => db.email == userEmail)
        if(dbObject.length >0)
        {
            setState({
                name: dbObject[0].name,
                email: userEmail,
                password: dbObject[0].password,
                id: dbObject[0].id,
                confirmpassword: dbObject[0].confirmpassword
            })
        }
    }, [])
    
    const handleEdit = () =>{
        setFormFlag(true);
        setEditState(prev =>({
            ...prev,
            name: state.name
        }))
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        e.preventDefault();
        setEditState( prev => ({
            ...prev,
            [name]: value
        }))
        console.log(editState[name]);
    }

    const handleChangePassword = () =>{
        const Flag = !changePassowrdFlag;
        setChangePasswordFlag(Flag);
    }

    const handleClear = () =>{
        setFormFlag(false)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let f1 = 1, f2 = 1, f3 = 1;

        if(!changePassowrdFlag)
        {
            const val = editState.name;
            state.name = val;
            const idd = state.id;
            await axios.put(`http://localhost:3334/user/${idd}`, state);
            
            history.push({
                pathname: '/home',
                state: userEmail
            })
        }
        
        if(editState.oldpassword.length == 0)
        {
            const val = editState.name;
            state.name = val;
            const idd = state.id;
            await axios.put(`http://localhost:3334/user/${idd}`, state);
            history.push({
                pathname: '/home',
                state: userEmail
            })
        }

        if(editState.oldpassword != state.password)
        {
            f1=0;
            setError1('old password is not match')
        }
        else
        {
            f1=1;
            setError1('');
        }

        if(editState.newpassword.length <6)
        {
            f2=0;
            setError2('new password length must be greater than or equal to 6')
        }
        else
        {
            f2=1;
            setError2('');
        }

        if(editState.newpassword != editState.confirmpassword)
        {
            f3=0;
            setError3('New password and old password must ber same')
        }
        else
        {
            f3=1;
            setError3('');
        }

        if(f1 && f2 && f3)
        {
            state.password = editState.newpassword;
            state.confirmpassword = editState.confirmpassword;
            state.name = editState.name;
            const idd = state.id;
            console.log(state);
            console.log(editState);
            await axios.put(`http://localhost:3334/user/${idd}`, state);
            history.push({
                pathname: '/home',
                state: userEmail
            })

        }


    }
 


    return (
        <ProfileContainer>
            <ProfileHeader>Welcome {state.name}</ProfileHeader>
            <ProfileBodyContainer>
                <ProfileDetailContainer color="yellow">
                    <Div>
                        <H3>Name : {state.name}</H3>
                    </Div>
                    <Div>
                        <H3>Email: {state.email}</H3>
                    </Div>
                    <Div>
                        <H3>Task You Done: </H3>
                    </Div>
                    <Div>
                        <H3>Task pending: </H3>
                    </Div>
                    <Button color="green" onClick ={handleEdit}> Edit</Button>
                </ProfileDetailContainer>
                <ProfileDetailEditContainer color="#008CBA">
                    {formFlag && 
                      <Form onSubmit = {handleSubmit}>
                          <Div>
                              <Label>Name</Label>
                              <Input type="text" name="name" value={editState.name} onChange={handleInput} required/>
                          </Div>
                          <FormMainDiv>
                              <H3 onClick={handleChangePassword}>Change Password</H3>
                              {changePassowrdFlag &&  
                                <FormDiv>
                                    <FormDiv>
                                        <Label>Old Password</Label>
                                        <Input name="oldpassword" type="password" onChange={handleInput} value={editState.oldpassword}/>
                                        {error1 && (
                                            <ErrorStyle>
                                                <p>**{error1}</p>
                                            </ErrorStyle>
                                        )}
                                    </FormDiv>
                                    <FormDiv>
                                        <Label>New Password</Label>
                                        <Input name="newpassword" type="password" onChange={handleInput} value={editState.newpassword}/>
                                        {error2 && (
                                            <ErrorStyle>
                                                <p>**{error2}</p>
                                            </ErrorStyle>
                                        )}
                                    </FormDiv>
                                    <FormDiv>
                                        <Label>Confirm Password</Label>
                                        <Input name="confirmpassword" type="password" onChange={handleInput} value={editState.confirmpassword}/>
                                        {error3 && (
                                            <ErrorStyle>
                                                <p>**{error3}</p>
                                            </ErrorStyle>
                                        )}
                                    </FormDiv>
                                </FormDiv>   
                              }                             
                          </FormMainDiv>
                            <ClearButton type="text" color="red" onClick={handleClear}> Clear</ClearButton>
                            <Button type="submit" color="green">Save</Button>
                      </Form>
                    }
                </ProfileDetailEditContainer>
            </ProfileBodyContainer>
        </ProfileContainer>
    )
}

export default React.memo(Profile)
    
