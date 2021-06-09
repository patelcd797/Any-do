import React, { useEffect, useState } from 'react'
import { TagContainer, TagList, FlexContainer, HeaderElements,Input } from './Tag-style';

function Tag( props ) {

    const [yellow, setYellow] = useState(false);
    const [pink, setPink] = useState(false);
    const [SkyBlue, setSkyBlue] = useState(false);
    const [orange, setOrange] = useState(false);
    const [green, setGreen] = useState(false);
    const [gray, setGray] = useState(false);
    

    useEffect(() =>{
        if( props.tags.find(item => item==='yellow'))
          setYellow(true)
        if( props.tags.find(item => item==='pink'))
          setPink(true)
        if( props.tags.find(item => item==='orange'))
          setOrange(true)  
        if( props.tags.find(item => item==='SkyBlue'))
          setSkyBlue(true)
        if( props.tags.find(item => item==='green'))
          setGreen(true)
        if( props.tags.find(item => item==='gray'))
          setGray(true)
        while(props.tags.length > 0) {
            props.tags.pop();
        }   
        
    },[props.tags])

    const handleClick = () =>{
        props.setTagFlag(false);
        if(yellow)
          props.tags.push('yellow');
        if(pink)
          props.tags.push('pink');
        if(orange)
          props.tags.push('orange');
        if(SkyBlue)  
          props.tags.push('SkyBlue');
        if(green)
          props.tags.push('green');
        if(gray)
          props.tags.push('gray');    
           
    }

    const handleClickYellow = () =>{
        setYellow(prev => !prev)
    } 
    const handleClickPink = () =>{
        setPink(prev => !prev)
    } 
    const handleClickGreen = () =>{
        setGreen(prev => !prev)
    } 
    const handleClickOrange = () =>{
        setOrange(prev => !prev)
    } 
    const handleClickGray = () =>{
        setGray(prev => !prev)
    } 
    const handleClickSkyBlue = () =>{
        setSkyBlue(prev => !prev)
    } 

    return (
        <TagContainer>
            <FlexContainer>
                <HeaderElements>Tags</HeaderElements>
                <HeaderElements onClick ={handleClick}>Save</HeaderElements>
            </FlexContainer>
            <FlexContainer name = 'yellow' backgroundColor = 'yellow'>
                <TagList >Priority</TagList>
                <Input type="checkbox" onClick = {handleClickYellow} checked = {yellow ? 'checked': ''}/>
            </FlexContainer>
            <FlexContainer name = 'pink' backgroundColor = 'pink'>
                <TagList >Important</TagList>
                <Input type="checkbox" onClick = {handleClickPink} checked = {pink ? 'checked': ''}/>
            </FlexContainer>
            <FlexContainer name = 'orange' backgroundColor = 'orange'>
                <TagList >In Progress</TagList>
                <Input type="checkbox" onClick = {handleClickOrange} checked = {orange ? 'checked': ''}/>
            </FlexContainer>
            <FlexContainer name = 'SkyBlue' backgroundColor = 'SkyBlue'>
                <TagList >Family</TagList>
                <Input type="checkbox" onClick = {handleClickSkyBlue} checked = {SkyBlue ? 'checked': ''}/>
            </FlexContainer>
            <FlexContainer name = 'green' backgroundColor = 'green'>
                <TagList >Project</TagList>
                <Input type="checkbox" onClick = {handleClickGreen} checked = {green ? 'checked': ''}/>
            </FlexContainer>
            <FlexContainer name = 'gray' backgroundColor = "gray">  
                <TagList>Medium Priority</TagList>
                <Input type="checkbox" onClick = {handleClickGray} checked = {gray ? 'checked': ''}/>
            </FlexContainer>
        </TagContainer>
    )
}

export default Tag;
