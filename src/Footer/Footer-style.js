import React from 'react'
import styled from 'styled-components'


export const FooterContainer = styled.div`
    display: flex;
    background-color: #50BBEE;
    width: 100%;
    height: 2%;
    flex: 1 1 1rem;
    box-sizing: border-box;
    padding: 0.5%;
`;

export const FooterItem = styled.div`
    font-weight: 500;
    width: 40%;
    padding:0.5%;
    box-sizing: border-box;
    text-align: center;
    color: black;
    background-color:${ props => props.backgroundColor || 'gray'};
`;
