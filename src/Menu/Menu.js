import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { List, MenuContainer, MenuListContainer } from './Menu-style';

const Menu = () => {
    
    const [listVisible, setListVisible] = useState(false);

    const handleClick = () =>{
        setListVisible(!listVisible)
    }


    return (
        <MenuContainer>
             <MenuIcon onClick ={handleClick}/>
            { listVisible ? <MenuListContainer>
                <List><a href="#">facebook</a></List>
                <List><a href="#">google</a></List>
                <List><a href="#">instagram</a></List>
            </MenuListContainer> : null }
                
        </MenuContainer>
    )
}

export default Menu;
