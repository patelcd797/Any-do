import styled from 'styled-components';


export const Modal = styled.div`
  display: block;
  position: absolute;
  height: 80vh;
  width: 70%;
  top: 5rem;
  z-index: 5;
  margin: 0 15%;
  padding: 1%;
  background-color: #ffffff; 
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0 0 10px #585858;
  @media only screen and (max-width: 1025px){
    width: 100%;
    margin: 0;
    height: 100vh;
    top: 0;
  }
`;

export const Header = styled.div`
  position: sticky;
  top: 5rem;
  padding: 5px;
  box-sizing: border-box;  
  width: 100%;
`;

export const ModalContainer = styled.div`
   height: 70vh;
   width: 100%;
   overflow: scroll;
`;

export const ModalDivContainer = styled.div`
  display: block;
  padding: 5px;
  box-sizing: border-box;  
  width: 100%;
`;

export const H1 = styled.h1`
  display: inline;
  font-weight: 600; 
  color: ${props => props.color ? props.color : 'black'};
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
   display: block;
   float: right;
   color: #1485E1;
   font-size: 1rem;
   font-weight: 400;
   background: none;
   border: none;
   outline: none;
   box-sizing: border-box;
`; 

export const AddTagButton = styled.button`
  display: inline;
  position: relative;;
  border: 1px gray dotted;
  border-radius: 5rem;
  background: none;
  outline: none;
  box-sizing: border-box;
`;

export const TagDisplayContainer = styled.div`
  display: inline;
  float: right;
  width: 17%;
  text-align: right;
`;

export const TagButton = styled.div`
  disPlay: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 5rem;
  border: none;
  margin-right: 2%;
  background-color: ${ props => props.backgroundColor ? props.backgroundColor : 'black'}
`; 

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
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

export const Form = styled.form`
  width: 100%;
`;
export const Input =styled.input`
  width: 90%;
  height: 1rem;
  padding: 0.7rem;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 5px;
  margin-right: 2%;
  border: 1px solid #d9dbda;
  outline: none;
  @media only screen and (max-width: 1200px){
    width: 70%;
    
  }
`;

export const SubTaskElement =styled.div`
  display: float;
  padding: 0.7rem;
  color: #fffff;
  height: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size:  1rem;
  font-weight: 400;
  border: 1px solid black;
  border-radius: 5px;
`;

export const SubTaskInput = styled.input`
  display: inline;
`;

export const H2 = styled.h2`
  display: inline-block;
  font-weight: 400;
  margin: 0;
  color: ${props => props.color ? props.color : 'black'};
  padding: 1;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const AddSubTaskButton = styled.button`
  width: 2.5rem;
  border-sizing: border-box;
  border:none;
  font-size: 2rem;
  background-color: #50BBEE;
  height: 2.5rem;
  color: #ffffff;
  border-radius: 100%;
  outline: none;
  font-size: 1.3rem;
  
`;

export const NotesButton = styled.button`
  display: block;
  width: 100%;
  background: none;
  padding: 0.5rem;
  color: #888888;
  font-weight: 600;
  border: 1px dotted #000;
  font-size: 1rem;
  outline: none;
  margin-top: 1rem;
  border-radius: 5px;
`;

export const DeleteTaskButton = styled(NotesButton)`
  border: 1px solid red;

  color: red;
`;

export const NotesContent = styled.div`
  display: block;
  width: 100%;
  padding: 1%;
  box-sizing: border-box;
  word-wrap: break-word;
`;

export const Div = styled.div`
   display: block;
   width: 95%;
`;