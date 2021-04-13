import React from 'react'
import { FooterContainer, FooterItem } from './Footer-style';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import ProfileIcon from '@material-ui/icons/AccountBox';
import TaskRight from '@material-ui/icons/CheckCircle';
import {useHistory, useLocation,Link} from 'react-router-dom';
import Calendar from 'react-calendar';

const Footer =( props ) =>{

  const history = useHistory();
  const location = useLocation(); 
  const userEmail = location.state;
  
  const handleProfileClick = () =>{
    history.push({
      pathname: '/profile',
      state: userEmail
    })
  }


    return (
        <FooterContainer>
          <FooterItem>
            <TaskRight />
          </FooterItem>
          <FooterItem>
            <CalendarIcon />
          </FooterItem>
          <FooterItem>
            <ProfileIcon onClick ={handleProfileClick}/>
          </FooterItem>
        </FooterContainer>
    )
}

export default Footer;
