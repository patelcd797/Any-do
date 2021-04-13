import styled from 'styled-components';

export const TaskCategoryModalContainer = styled.div`
    display: block;
    width: 100%;
    height: auto;
    min-height: 100vh; 
    padding: 1rem; 
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
    color: #ffffff;
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
  display: flex;
  justify-content: space-between;
  padding: 0.7rem;
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