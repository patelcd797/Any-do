import React, {useState} from 'react';
import { Form, H1, MainContainer, Label, FormBody, Input, Div, Button } from './ForgotPassword-style';
import {user} from '../../db.json';
import {useHistory} from 'react-router-dom';

const initialValue ={
    email: '',
    password: ''
}
const ForgotPassword = () =>{

    const [state, setState] = useState(initialValue);
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

    const handleSubmit = (e) =>{
        e.preventDefault();

        const dbObject = user.filter( d => d.email == state.email);

        if(dbObject.length > 0)
        {
            setError1('')
            history.push('/login');

            // mail code

        }
        else{
            setError1('enter valid email')
        }

    }


    return (
        <MainContainer>
            <Form onSubmit={handleSubmit}>
                <H1>Forgot Password</H1>
                <FormBody>
                    <Div>
                        <Label>enter email</Label>
                        <Input name="email" value={state.email} onChange={handleInput} required/>
                    </Div>
                    <Div>
                        <Label>Recent Password</Label>
                        <Input name="password" value={state.password} onChange={handleInput} required/>
                    </Div>
                    <Div>
                        <Button type = "submit" color="green">
                            Send  Reset Password Link
                        </Button>
                    </Div>
                </FormBody>
            </Form>
        </MainContainer>
    )
}

export default ForgotPassword;
