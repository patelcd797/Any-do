import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Share } from '@material-ui/icons';
import { ShareContainer, ShareListContainer, List } from './Share-style';

const ShareList = () => {
    
    const [listVisible, setListVisible] = useState(false);

    const handleClick = () =>{
        setListVisible(!listVisible)
    }


    return (
        <ShareContainer>
             <Share onClick ={handleClick}/>
            { listVisible ? <ShareListContainer>
                <List><a href="https://www.facebook.com/" target="_blank">facebook</a></List>
                <List><a href="https://www.google.com/" target="_blank">google</a></List>
                <List><a href="https://www.instagram.com/" target="_blank">instagram</a></List>
            </ShareListContainer> : null }
        </ShareContainer>
    )
}

export default ShareList;
