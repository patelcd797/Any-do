import React, {useState} from 'react';
import axios from 'axios';
import { Container, Footer, Form, H1, Header, Input,
        RegistrationFormContainer, RegistrationFormTitle, 
        MainContainer, A, Button, Label, ErrorStyle} from './Registration-style';
import {user} from '../../db.json';
import {useHistory} from 'react-router-dom';

const initialState = { 
    name:'',
    email: '',
    password: '',
    confirmpassword: '',
    taskYouDone: 0,
    taskPending: 0
};

const Registration = () => {
    const [state, setState] = useState(initialState);
    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');
    const history = useHistory();

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        e.preventDefault();
        setState( prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handlelogin = () => history.push('/login')
    const handleSubmit = async (e) =>{
        e.preventDefault();
        var f1=1, f2=1,f3=1;
        const dbObject = user.filter(d=> d.email == state.email)

        if(dbObject.length >0)
        {
            setError1('Email already in use')
            f1=0
        }
        else
        {
            setError1('');
            f1=1;
        }

        if(state.password.length < 6)
        {
            setError2('Password length atleast 6')
            f2=0;
        }
        else
        {
            setError2('')
            f2=1;
        }
        if(state.password != state.confirmpassword)
        {
            setError3('password and confirm password must be same')
            f3=0;
        }
        else
        {
            setError3('')
            f3=1;
        }
        if( f1 && f2 && f3)
        {
            await axios.post('http://localhost:3334/user',state);
            history.push('/');
        }

    }



    return (
        <Container>
            <Header>
             <H1>welcome to gateway Registration page</H1>
            </Header>
            <MainContainer>
                <RegistrationFormContainer>
                    <RegistrationFormTitle>Registration</RegistrationFormTitle>
                        <Form onSubmit = {handleSubmit}>
                            <H1>USER AUTHENTICATION</H1>
                            <Label>Name</Label>
                            <Input type= 'text' name='name' value={state.name} onChange={handleInput} required/>
                            <Label>Enter Email</Label>
                            <Input type= 'email' name='email' value={state.email} onChange={handleInput} required/>
                            {error1 && <ErrorStyle>{error1}</ErrorStyle>}
                            <Label>Password</Label>
                            <Input type="password" name='password' value={state.password} onChange={handleInput} required/> 
                            {error2 && <ErrorStyle>{error2}</ErrorStyle>}
                            <Label>Confirm Password</Label>
                            <Input type="password" name='confirmpassword' value={state.confirmpassword} onChange={handleInput} required/>
                            {error3 && <ErrorStyle>{error3}</ErrorStyle>}
                            <Button type="submit" color="green">Registration</Button>
                            <A onClick={handlelogin}>Back To Login</A>
                        </Form>
                </RegistrationFormContainer>
            </MainContainer>
            <Footer>
                <H1>Gateway</H1>
            </Footer>
        </Container>
    )
}

export default Registration;
