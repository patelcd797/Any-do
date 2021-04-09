import React from 'react'
import { NavigationContainer, NavigationItem } from './Navigation-style'
import Menu from '../Menu/Menu';
import ShareList from '../Share/Share';

const AlltaskStyle = {
    backgroundColor: 'yellow',
    flex: '1 1 100%',
    textAlign: 'center'
}

const ShareStyle = {
    backgroundColor: 'pink',
    textAlign: 'right'
}

const Navigation =() => {
    return (
        <NavigationContainer>
          <NavigationItem style= {{backgroundColor: 'pink'}}>
                <Menu /> 
          </NavigationItem>
          <NavigationItem style= {AlltaskStyle}>
              All Tasks
          </NavigationItem>
          <NavigationItem style= {ShareStyle}>
                <ShareList />
          </NavigationItem>
        </NavigationContainer>  
    )
}

export default Navigation;
