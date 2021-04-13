import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { TaskContainer, TaskList, Input, Div } from './Task-style';
import {tasks} from '../db.json';
import TaskPage from '../TaskPage/TaskPage';

const Task = () => {

    const [state, setState] = useState([]);
    const [modalFlag, setModalFlag] = useState(false);
    const [id,setId] = useState(0);
    const location = useLocation();
    const userEmail = location.state;

    useEffect(() => {
        const dbObject = tasks.filter( task => task.email==userEmail)
        setState(dbObject)
    },[state.task])

    const handleClick = e =>{
        const idd = e.target.id
        setId(idd);
        setModalFlag(true);
    }
    const CloseModal = () =>{
        setModalFlag(false)
    }



    return (
        <TaskContainer>
            { modalFlag && <TaskPage id={id} CloseModal={CloseModal} /> }
            {
                state.map(item =>{
                    return (
                    <>
                        <TaskList>
                            <Div onClick={handleClick} id ={item.id}>{item.task}</Div>
                            <Input type="checkbox" /> 
                        </TaskList>
                    </>)
                })
            }
        </TaskContainer>
        
    )
}

export default Task;
