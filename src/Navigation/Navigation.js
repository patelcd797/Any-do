import React from 'react'
import { NavigationContainer, NavigationItem } from './Navigation-style'
import Menu from '../Menu/Menu';
import ShareList from '../Share/Share';

const AlltaskStyle = {
    flex: '1 1 100%',
    textAlign: 'center'
}

const Navigation =() => {
    return (
        <NavigationContainer>
          <NavigationItem>
                <Menu /> 
          </NavigationItem>
          <NavigationItem style= {AlltaskStyle}>
              All Tasks
          </NavigationItem>
          <NavigationItem style= {{textAlign: 'right'}}>
                <ShareList />
          </NavigationItem>
        </NavigationContainer>  
    )
}

export default Navigation;
