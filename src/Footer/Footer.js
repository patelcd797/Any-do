import React from 'react'
import { FooterContainer, FooterItem } from './Footer-style';
import ProfileIcon from '@material-ui/icons/AccountBox';
import TaskRight from '@material-ui/icons/CheckCircle';
import {useHistory, useLocation} from 'react-router-dom';
import Calendar from '../Calendar/Calendar';

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
            <Calendar />
          </FooterItem>
          <FooterItem>
            <ProfileIcon onClick ={handleProfileClick}/>
          </FooterItem>
        </FooterContainer>
    )
}

export default Footer;
