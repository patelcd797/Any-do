import React, { useState, useEffect } from 'react'
import { CloseButton, Modal, ModalDivContainer, H1, AddTagButton, Select, Option, Label, ListContainer, Input } from './TaskPage-style';
import {tasks} from '../db.json';

const initialState = {
    id: 0,
    email: '',
    task:  ''
}

function TaskPage( props ) {

    const [state, setState] = useState(initialState); 

    useEffect(() =>{
        const dbObject = tasks.filter(task => task.id == props.id)
    })

    return (
        <Modal>
            <ModalDivContainer>
                <H1>Task Details</H1>
                <CloseButton onClick = {props.CloseModal} >X</CloseButton>   
            </ModalDivContainer>
            <ModalDivContainer>
                <AddTagButton>Add Tag</AddTagButton>
            </ModalDivContainer>
            <ListContainer>
                <ModalDivContainer>
                    <Label>List</Label>
                    <Select>
                        <Option>Personal</Option>
                        <Option>Work</Option>
                        <Option>Grocery List</Option>
                    </Select>
                </ModalDivContainer>
                <ModalDivContainer>
                    <Label>List</Label>
                    <Select>
                        <Option>Personal</Option>
                        <Option>Work</Option>
                        <Option>Grocery List</Option>
                    </Select>
                </ModalDivContainer>               
            </ListContainer>
            <ModalDivContainer>
                <Input type="text" name="subtask" />
            </ModalDivContainer>
                
        </Modal>
    )
}

export default TaskPage;
