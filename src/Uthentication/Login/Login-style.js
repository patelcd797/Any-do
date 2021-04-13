import styled from 'styled-components';
import img from '../../Images/Loginpagebackground.jpg';

export const Container =  styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    min-height: 100vh;
    height: fit-content;
    box-sizing: border-box;
    @media only screen and (max-width: 1025px){
        height: 100vh;
    } 
`;

export const Header = styled.div`
    height: 3%;
    background-color: #343433;
    color: #ffffff;
    padding: 1%;
    font-size: 1.5rem;
    border-sizing: border-box;
    @media only screen and (max-width: 1025px){
        height: 8vh;
        font-size: 1.1rem;
    } 
`;

export const MainContainer = styled.div`
    width: 80%;
    height: 74vh;
    border-sizing: border-box;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 10%;
    padding-right: 10%;
    background-image: url(${img});
    @media only screen and (max-width: 1025px){
        padding: 0;
        width: 100%;
        height: 100vh;
        background-image: none;
    }

`;

export const LoginFormContainer = styled.div`
    border: 0.05rem solid gray;
    border-radius: 1rem;
    background-color: #ffffff;
    box-sizing: border-box;
    overflow: hidden;
    @media only screen and (max-width: 1025px){
        width: 100%;
        height: 85vh;
        border-radius: 0px;
    }
`;

export const LoginFormTitle = styled.div`
   padding-top: 2vh;
   padding-bottom: 2vh;
   padding-left: 1rem;
   color: #fffff;
   font-weight: 400;
   font-size: 2rem;
   border-sizing: border-box;
   @media only screen and (max-width: 1025px ){
       width: 100%;
   }
`;

export const Footer = styled.div`
    height: 3rem;
    background-color: #343433;
    color: #ffffff;
    padding: 1%;
    font-size: 2rem;
    border-sizing: border-box;
`;

export const Form = styled.form`
    width: 100%;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 2%;
    padding-bottom: 2%; 
    box-sizing: border-box;
`;

export const H1 = styled.div`
    text-transform: uppercase;
    padding: 1% 0;
    border-sizing: border-box;
    
`;

export const Input = styled.input`
    width: 100%;
    display: block;
    box-sizing: border-box;
    border: none;
    border-bottom: 0.1rem solid gray;
    height: 2%;
    margin-bottom: 4%;
    outline: none;
`;

export const A = styled.a`
   height: 2%;
   display: block;
   margin: 3% 0;
   box-sizing: border-box;
   &: hover{
       cursor:default;
   }
   
`;

export const Button = styled.button`
    width: 100%;
    border-sizing: border-box;
    border:none;
    background-color: ${props => props.color};
    height: 3rem;
    color: #ffffff;
    border-radius: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
    outline: none;
`; 

export const Label = styled.label`
  width: 100%;
  font-size: 1rem;
  display: block;
  padding: 1% 0;
  box-sizing: border-box;
`;

export const ErrorStyle = styled.div`
   color: red;
   font-weight: 500;
   margin-top: -0.8em;
   box-sizing: border-box;
`;
