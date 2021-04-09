import styled from 'styled-components';


export const Modal = styled.div`
  display: block;
  position: absolute;
  width: 70%;
  z-index: 5;
  margin: 5% 15%;
  padding: 1%;
  background-color: pink; 
  border-radius: 5px;
  box-sizing: border-box;
`;

export const ModalDivContainer = styled.div`
  display: block;
  padding: 1rem;
  box-sizing: border-box;  
  width: 100%;
`;

export const H1 = styled.h1`
  display: inline;
  font-family: lato;
  font-weight: 400; 
  font-size: 2rem;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
   display: block;
   float: right;
   background: none;
   border: none;
   outline: none;
   box-sizing: border-box;
`; 

export const AddTagButton = styled.button`
  display: inline;
  border: 1px gray dotted;
  border-radius: 5rem;
  background: none;
  outline: none;
  box-sizing: border-box;
`;



export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;


export const Select = styled.select`
  display: block;
  outline: none;
  width: 100%;
  padding: 2%;
  -webkit-appearance: none;
  outline: none;
  box-sizing: border-box;
  font-size: 1rem;
  border-radius: 5px;
`;

export const Option = styled.option`
  display: block;
  box-sizing: border-box;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`; 

export const Input =styled.input`
  display: block;
  height: 2rem;
  padding: 1rem;
  width: 100%;
  border: 1px solid gray;
  outline: none;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 1rem;
`;