import React, {useState} from 'react';
import { Form, H1, MainContainer, Label, FormBody, Input, Div, 
         Button, ErrorStyle } from './ForgotPassword-style';
import axios from 'axios';         
import {Link, useHistory} from 'react-router-dom';

const ForgotPassword = () =>{

    const [state, setState] = useState({email:'', password:''});
    const [error1, setError1] = useState('');
    const history = useHistory();

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setState(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:8000/api/user/forgotPassword', state)
        .then(res=>{
            if(res.data.success)
             history.push('/login')
            setError1(res.data.msg) 
        })
        .catch(err=>{
            setError1(err.data)
        })
    }

    return (
        <MainContainer>
            <Form onSubmit={handleSubmit}>
                <H1>Forgot Password</H1>
                <FormBody>
                    <Div>
                        <Label>enter email</Label>
                        <Input name="email" value={state.email} onChange={handleInput} required/>
                        <ErrorStyle>{error1}</ErrorStyle>
                    </Div>
                    <Div>
                        <Label>Recent Password</Label>
                        <Input name="password" value={state.password} onChange={handleInput} required/>
                    </Div>
                    <Div>
                        <Button type = "submit" color="green">
                            Send  Reset Password Link
                        </Button>
                        <Div><Link to='/login'>Back to Login</Link></Div>
                    </Div>
                </FormBody>
            </Form>
        </MainContainer>
    )
}

export default ForgotPassword;
