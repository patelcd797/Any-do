import React from 'react';
import styled from 'styled-components';

export const TaskContainer = styled.div`
    background-color: green;
    flex: 20 1 2rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5%;
    overflow: scroll;
`;

export const TaskList = styled.div`
  display: block;
  padding: 0.7rem;
  color: #fffff;
  background-color: #12ffee;
  height: 2rem;
  padding: 0.5rem;
  margin: 1rem 0;
  font-size:  1.5rem;
  font-weight: 400;
`;

export const Input = styled.input`
   height: 1.5rem;
   width: 1.5rem;
   float: right;
`;