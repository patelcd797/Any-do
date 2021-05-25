import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Share } from '@material-ui/icons';
import { ShareContainer, ShareListContainer, List, A } from './Share-style';

const ShareList = () => {
    
    const [listVisible, setListVisible] = useState(false);

    const handleClick = () =>{
        setListVisible(!listVisible)
    }


    return (
        <ShareContainer>
             <Share onClick ={handleClick}/>
            { listVisible ? <ShareListContainer>
                <List> <A href="https://www.facebook.com/" target="_blank">Facebook</A></List>
                <List><A href="https://www.google.com/" target="_blank">Google</A></List>
                <List><A href="https://www.instagram.com/" target="_blank">Instagram</A></List>
            </ShareListContainer> : null }
        </ShareContainer>
    )
}

export default ShareList;
