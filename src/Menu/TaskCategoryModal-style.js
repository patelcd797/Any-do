import styled from 'styled-components';

export const TaskCategoryModalContainer = styled.div`
    display: block;
    width: 100%;
    height: auto;
    min-height: 100vh; 
    padding: 1rem; 
    background-color: SkyBlue;
    box-sizing: border-box;
`;

export const CategoryHeader = styled.div`
    display: float;
    justify-content: space-between;
    position: sticky;
    top: 0;
    padding: 1rem;
    background-color: #008888;
    box-sizing: border-box;
`;

export const BackButton = styled.button`
    display: inline-block;
    background: none;
    border: none;
    font-size: 1.5rem;
    outline: none;
    box-sizing: border-box;
`;

export const CategoryTitle = styled.h1`
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff; 
    padding: 0;
    margin: 0;
    margin-left: 1%;
`;

export const TaskContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0.5%;
    overflow: scroll;
`;

export const TaskList = styled.div`
  display: block;
  padding: 0.7rem;
  color: #ffffff;
  background-color: #AA9988;
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