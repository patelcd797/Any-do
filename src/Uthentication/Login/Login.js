import React, {useState} from 'react'
import { Container, Footer, Form, H1, Header, Input, LoginFormContainer, 
         LoginFormTitle, MainContainer, A, Button, Label, ErrorStyle 
        } from './Login-style';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const history = useHistory();
    const [state, setState] = useState({email: '', password: ''});
    const [error, setError] = useState('')
    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        e.preventDefault();
        setState( prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleLinkClick = () => history.push('/forgotpassword');
    const handleRegister = () => history.push('/register');
    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:8000/api/user/login', state)
        .then(res =>{
            if(res.data.success)
            {history.push({
                pathname: '/home',
                state: state.email
            });}
            if(res.data.type === 1)
             {
                 setError1(res.data.msg)
                 setError2('')
             }
            else
             {
                 setError1('')
                 setError2(res.data.msg)
             } 
        })
        .catch(err =>{
            setError(err.data.msg)
        })
    } 


    return (
        <Container>
            <Header>
             <H1>welcome to gateway login</H1>
            </Header>
            <MainContainer>
                <LoginFormContainer>
                    <LoginFormTitle>Login</LoginFormTitle>
                    <Form onSubmit ={handleSubmit}>
                        {error && <ErrorStyle>{error}</ErrorStyle>}
                        <H1>USER AUTHENTICATION</H1>
                        <Label>Email</Label>
                        <Input type= 'email' name="email" value={state.email} onChange={handleInput}/>
                        {error1 && <ErrorStyle>{error1}</ErrorStyle>}
                        <Label>Password</Label>
                        <Input type="password" name="password" value={state.password} onChange={handleInput}/> 
                        {error2 && <ErrorStyle>{error2}</ErrorStyle>}
                        <A onClick={handleLinkClick}>Forgot Password</A>
                        <Button type="submit" color="green">Login</Button>
                        <A onClick={handleRegister}>For New Registration</A>
                    </Form> 
                </LoginFormContainer>
            </MainContainer>
            <Footer>
                <H1>Gateway</H1>
            </Footer>
        </Container>
    )
}

export default Login;
