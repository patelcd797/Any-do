import React, {useState, useEffect} from 'react'
import { Div, ProfileContainer, ProfileHeader, Button, Form,
         Input, FormDiv, ErrorStyle, ProfileBody } from './Profile-style'
import { useHistory, useLocation } from 'react-router-dom';
import { user } from '../db.json';
import axios from 'axios';
import { Create, Done } from '@material-ui/icons';

const initialPasswordState = {
    opassword: '',
    npassword: '',
    cpassword: ''
}

const Profile = () =>{

    const history = useHistory();
    const location = useLocation();
    const userEmail = location.state;
    const [state, setState] = useState([]);
    const [nameChangeFlag, setNameChangeFlag] = useState(true);
    const [password, setPassword] = useState(initialPasswordState);
    const [passwordFlag, setPasswordFlag] = useState(false);
    const [error1, setError1] =useState('');
    const [error2, setError2] =useState('');
    const [error3, setError3] =useState('');

    useEffect( () =>{
        const dbObject = user.filter( db => db.email === userEmail)
        if(dbObject.length >0)
          setState(dbObject[0])
    }, [userEmail])

    const handleInputChange =async e =>{
        const attr = e.target.name;
        const value = e.target.value;
        setState(prev => ({
            ...prev,
            [attr]: value
        }))
    }

    const handleNameChange = e => setNameChangeFlag(false)
    const handleNameDone =async e => {
        setNameChangeFlag(true)
        await axios.put(`http://localhost:3334/user/${state.id}`, state)
    }

    const handlePasswordChange = e =>{
        const attr = e.target.name;
        const value = e.target.value;
        setPassword(prev => ({
            ...prev,
            [attr]: value
        })) 
    } 

    const handleRestPassword = () => setPasswordFlag(true)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let f1 = 1, f2 = 1, f3 = 1;
        
        if(password.opassword !== state.password){
            f1=0;
            setError1('Old password is wrong')
        }
        else{
            f1=1;
            setError1('');
        }
        if(password.npassword.length < 6){
            f2=0;
            setError2('new password length < 6')
        }
        else{
            f2=1;
            setError2('');
        }
        if(password.npassword !== password.cpassword){
            f3=0;
            setError3('New password not match')
        }
        else{
            f3=1;
            setError3('');
        }
        console.log(f1,f2,f3);
        if(f1 && f2 && f3){
            state.password = password.npassword;
            state.confirmpassword = password.cpassword;
            await axios.put(`http://localhost:3334/user/${state.id}`, state);
            setPassword(initialPasswordState)
            setPasswordFlag(false)
        }
    }
    const handleDelete =async () =>{
        await axios.delete(`http://localhost:3334/user/${state.id}`);
        history.push('/login');
    }
    const handleSignOut = () => history.push('/login')


    return (
        <ProfileContainer>
            <ProfileHeader>Profile</ProfileHeader>
            <ProfileBody>
                <Div>
                    <Input type="text" name='name' value={state.name} onChange = {handleInputChange} readOnly ={nameChangeFlag}/>
                    {!nameChangeFlag &&<Done onClick={handleNameDone}/> }
                    {nameChangeFlag && <Create onClick={handleNameChange}/>}
                </Div>
                <Div><Input type="email" name='email' value={state.email} readOnly/></Div>
                <Div>Task you done: {state.taskYouDone} </Div>
                <Div>Task Pending: {state.taskPending}</Div>
                <Div onClick={handleRestPassword}>Reset Password</Div>
                {passwordFlag &&<Div>
                    <Form onSubmit = {handleSubmit}>
                        <FormDiv>
                            <Input type='password' name='opassword' value={password.opassword} onChange={handlePasswordChange} placeholder='Old Password'/>
                            {error1 && <ErrorStyle>{error1}</ErrorStyle>}
                        </FormDiv>
                        <FormDiv>
                            <Input type='password' name='npassword' value={password.npassword} onChange={handlePasswordChange} placeholder='New Password'/>
                            {error2 && <ErrorStyle>{error2}</ErrorStyle>}
                        </FormDiv>
                        <FormDiv>
                            <Input type='password' name='cpassword' value={password.cpassword} onChange={handlePasswordChange} placeholder='Confirm Password'/>
                            {error3 && <ErrorStyle>{error3}</ErrorStyle>}
                        </FormDiv>
                        <Button type='submit'>Save</Button>
                    </Form>
                </Div>}
                <Div onClick ={handleDelete}>Delete Account</Div>
                <Div onClick={handleSignOut}>Sign Out</Div>
            </ProfileBody>
        </ProfileContainer>
    )
}

export default React.memo(Profile)
    
