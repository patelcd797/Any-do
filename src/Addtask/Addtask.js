import { Add } from '@material-ui/icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { AddButton, AddtaskContainer, Input, NavigationItem } from './Addtask-style';

const initialState = {
    email: '',
    task:  '',
    list: 'Personal',
    owner: 'Me',
    subTasks: [],
    note: '',
    tag: []
}

const Addtask =() => {
     
    const [state, setState] = useState(initialState);
    const location = useLocation();
    const userEmail = location.state

    console.log(userEmail)


    useEffect(() => {
        setState(prev =>({
            ...prev,
            email: userEmail,
            task: ''
        }))
    }, [])

    const handleChange = e =>{
        setState(prev =>({
            ...prev,
            task: e.target.value
        }));
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        await axios.post('http://localhost:3334/tasks', state)
        setState(prev =>({
            ...prev,
            task:''
        }))
    }
    
    return (
        <AddtaskContainer onSubmit ={handleSubmit}>
            <Input type="text" name="task" value={state.task} onChange ={handleChange} placeholder="I want to..." required/>
            <AddButton type="submit"><Add /></AddButton> 
        </AddtaskContainer>  
    )
}

export default Addtask;
