import styled from 'styled-components';

export const NoteModalContainer = styled.div`
    position: absolute;
    z-index: 1000;
    left: 20%;
    top: 20%; 
    width: 50%;
    background-color: #FAE8E0;
    padding: 1%;
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;
    box-sizing: border-box;
`;
export const H4 = styled.h4`
   display: block;
   margin: 0;
   padding: 2%;
   text-align: center;
   border-bottom: 1px solid gray;
   box-sizing: border-box;
`;
export const TextArea = styled.textarea`
   display: block;
   width: 100%;
   height: 20vh;
   padding: 2%;
   font-size: 1rem;
   outline: none;
   box-sizing: border-box;
`;
export const SaveButton = styled.button`
   display: block;
   background: none;
   outline:none;
   width: 100%;
   color: #1485E1;
   font-weight: 600;
   font-size: 1.1rem;
   padding: 1%;
   border: none;
   border-top: 1px solid gray;
   box-sizing: border-box;
`;