import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { List, MenuContainer, MenuListContainer } from './Menu-style';
import { useHistory, useLocation } from 'react-router-dom';

const Menu = () => {
    
    const history = useHistory();
    const location = useLocation();
    const [listVisible, setListVisible] = useState(false);

    const handleClick = () =>{
        setListVisible(!listVisible)
    }

    const handleAllTaskSelection = (e) =>{
        history.push({
            pathname: '/taskcategory',
            state: { 
                email: location.state,
                list: 'All Task'
            }
        })
    }

    const handlePersonalTaskSelection = (e) =>{
        console.log( e.target.name );
        history.push({
            pathname: '/taskcategory',
            state: { 
                email: location.state,
                list: 'Personal'
            }
        })
    }

    const handleWorkTaskSelection = (e) =>{
        console.log( e.target.name );
        history.push({
            pathname: '/taskcategory',
            state: { 
                email: location.state,
                list: 'Work'
            }
        })
    }

    const handleGroceryListTaskSelection = (e) =>{
        console.log( e.target.name );
        history.push({
            pathname: '/taskcategory',
            state: { 
                email: location.state,
                list: 'Grocery List'
            }
        })
    }

    const handleLogOut = () =>{
        history.push('/login')
    }


    return (
        <MenuContainer>
             <MenuIcon onClick ={handleClick}/>
            { listVisible ? <MenuListContainer>
                <List onClick={handleAllTaskSelection}>All Task</List>
                <List onClick={handlePersonalTaskSelection}>Personal</List>
                <List onClick={handleWorkTaskSelection}>Work</List>
                <List onClick={handleGroceryListTaskSelection}>Grocery List</List>
                <List onClick={handleLogOut}>Logout</List>
            </MenuListContainer> : null }
                
        </MenuContainer>
    )
}

export default Menu;
