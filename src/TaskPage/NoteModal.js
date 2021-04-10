import { SentimentSatisfied } from '@material-ui/icons';
import React, {useEffect, useState} from 'react'
import { NoteModalContainer, TextArea, H4, SaveButton } from './NoteModal-style'

function NoteModal(props) {

    const [note,setNote] = useState('');
    
    const handleChange = e => setNote(e.target.value)
    useEffect(()=>{
        setNote(props.notes)
    },[])

    const handleClick = e =>{
        props.setState(prev =>({
            ...prev,
            note: note
        }))
        props.setNoteFlag(false)
    }

    return (
        <NoteModalContainer>
            <H4>Notes</H4>
            <TextArea value={note} onChange={handleChange}/>
            <SaveButton type="button" onClick={handleClick}>save</SaveButton>
        </NoteModalContainer>
    )
}

export default NoteModal;
