import React, {useEffect, useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import TaskPage from '../TaskPage/TaskPage';
import { BackButton, CategoryHeader, CategoryTitle, TaskCategoryModalContainer, 
          TaskContainer, TaskList, Input} from './TaskCategoryModal-style'
import {tasks} from '../db.json';
function TaskCategoryModal() {

    const history = useHistory();
    const location = useLocation();
    const category = location.state;
    const [modalFlag, setModalFlag] = useState(false);
    const [id,setId] = useState(0);
    const [state, setState] = useState([]);

    useEffect(()=>{
        
        var dbObject;
        if(category.list == 'All Task') 
          dbObject= tasks.filter( d => d.email == category.email);
        else 
          dbObject = tasks.filter( d => (d.email == category.email && d.list== category.list))   
         console.log(dbObject);
        setState(dbObject)  

    }, [])

    const handleClick = e =>{
        const idd = e.target.id
        setId(idd);
        setModalFlag(true);
    }
    const CloseModal = () =>{
        setModalFlag(false)
    }

    const handleClose = () =>{
        history.push({
            pathname: '/home',
            state: category.email
        });
    }

    return (
        <TaskCategoryModalContainer>
            <CategoryHeader>
                <CategoryTitle>{category.list}</CategoryTitle>
                <BackButton type="button" onClick={handleClose}>X</BackButton>
            </CategoryHeader>
            <TaskContainer>
            { modalFlag && <TaskPage id={id} CloseModal={CloseModal} /> }
            {
                state.map(item =>{
                    return (
                    <>
                        <TaskList onClick={handleClick} id ={item.id}>
                            <Input type="checkbox" /> {item.task}
                        </TaskList>
                    </>)
                })
            }
        </TaskContainer>
        </TaskCategoryModalContainer>
    )
}

export default TaskCategoryModal;
