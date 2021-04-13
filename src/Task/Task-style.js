import React from 'react';
import styled from 'styled-components';

export const TaskContainer = styled.div`
    flex: 20 1 2rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5%;
    overflow: scroll;
`;

export const TaskList = styled.div`
  display: float;
  padding: 0.7rem;
  color: #fffff;
  background-color: #ffffff;
  height: 2rem;
  padding: 0.5rem;
  margin: 1rem 0;
  font-size:  1.5rem;
  font-weight: 400;
  border-radius: 5px;
  z-index: 2;
  box-shadow: 0 0 5px #585858;
`;

export const Input = styled.input`
   height: 75%;
   width: 2%;
`;
export const Div = styled.div`
   display: block;
   width: 95%;
`;