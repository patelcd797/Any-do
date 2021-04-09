import React, {useState} from 'react'
import { Container, Footer, Form, H1, Header, Input, 
         LoginFormSubContainer, LoginFormContainer, 
         LoginFormTitle, SideContainer, MainContainer, 
         A, Button, Div, Label, ErrorStyle } from './Login-style';
import {useHistory} from 'react-router-dom';
import {user} from '../../db.json';

const initialState = {
    email: '',
    password: ''
}

const Login = () => {

    const history = useHistory();
    const [state, setState] = useState(initialState);
    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    
    const handleRegisterButton = () =>{
        history.push('/register');
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        e.preventDefault();
        setState( prev => ({
            ...prev,
            [name]: value
        }))
        console.log(state[name]);
    }

    const handleLinkClick = () => {
        history.push('/forgotpassword');
    }


    const handleSubmit = (e) =>{
        e.preventDefault();

        const dbObject = user.filter( d => d.email == state.email);
        setError1('');
        setError2('');
        if(dbObject.length >0)
        {
            if(dbObject[0].password == state.password)
            {
                history.push({
                    pathname: '/home',
                    state: state.email
                });
            }
            else
            {
                setError2('Password is wrong')
            }
        }
        else
        {
            setError1('Email  is not registerd');
        }
    } 


    return (
        <Container>
            <Header>
             <H1>welcome to gateway login</H1>
            </Header>
            <MainContainer>
                <LoginFormContainer>
                    <LoginFormTitle>Login</LoginFormTitle>
                    <LoginFormSubContainer>
                        <Form onSubmit ={handleSubmit}>
                            <H1>USER AUTHENTICATION</H1>
                            <Label>Email</Label>
                            <Input type= 'email' name="email" value={state.email} onChange={handleInput}/>
                            <Label>Password</Label>
                            <Input type="password" name="password" value={state.password} onChange={handleInput}/> 
                            <A onClick={handleLinkClick}>Forgot Password</A>
                            <Button type="submit" color="green">Login</Button>
                        </Form>
                        <SideContainer>
                            <H1>For New Registration</H1>
                            <Button type="submit" color="red" onClick={handleRegisterButton}>Registration</Button>
                            <Div>
                                {error1 && (
                                    <ErrorStyle>
                                        <p>**{error1}</p>
                                    </ErrorStyle>
                                )}
                                {error2 && (
                                    <ErrorStyle>
                                        <p>**{error2}</p>
                                    </ErrorStyle>
                                )}
                            </Div>
                        </SideContainer> 
                    </LoginFormSubContainer>
                </LoginFormContainer>
            </MainContainer>
        
            <Footer>
                <H1>Gatway</H1>
            </Footer>
        </Container>
    )
}

export default Login;
