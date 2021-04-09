import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { HomeContainer } from './Home-style';
import Task from '../Task/Task';
import Addtask from '../Addtask/Addtask';
import {useHistory, useLocation} from 'react-router-dom';


const Home = () => {
    const history = useHistory();
    const location = useLocation(); 
    const userEmail = location.state;
    
    return (
    <HomeContainer>
      <Navigation />
      <Task />
      <Addtask />
      <Footer />
    </HomeContainer>
    );
}

export default Home
