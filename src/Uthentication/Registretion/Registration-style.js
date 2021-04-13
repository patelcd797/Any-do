import styled from 'styled-components';
import img from '../../Images/Loginpagebackground.jpg';

export const Container =  styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    min-height: 100vh;
    height: fit-content;
    box-sizing: border-box;
`;

export const Header = styled.div`
    height: 3rem;
    background-color: #343433;
    color: #ffffff;
    padding: 1%;
    font-size: 2rem;
    border-sizing: border-box;
    @media only screen and (max-width: 400px){
        height: 3rem;
    }
`;

export const MainContainer = styled.div`
    width: 80%;
    heightL 80vh;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 10%;
    padding-right: 10%;
    background-image: url(${img});
    border-sizing: border-box;
    @media only screen and (max-width: 400px){
        background-image: none;
        padding: 0;
        width: 100%;
        height: 83vh;
    }
    @media only screen and (max-width: 1025px ){
        background-image: none;
        padding: 0;
        width: 100%;
        height: 89vh;
    }
`;

export const RegistrationFormContainer = styled.div`
    border: 0.05rem solid gray;
    border-radius: 1rem;
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 3%;
    @media only screen and (max-width: 400px){
        border-radius: 0px;
        height: 83vh;
    }
    @media only screen and (max-width: 1025px ){
        border-radius: 0px;
        height: 89vh;
    }
`;

export const RegistrationFormTitle = styled.div`
   padding-top: 2vh;
   padding-bottom: 2vh;
   padding-left: 2rem;
   color: #fffff;
   font-weight: 400;
   font-size: 2rem;
   border-sizing: border-box;
   @media only screen and (max-width: 1025px){
       padding-left: 0;
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
    height: 60vh;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 2%;
    padding-bottom: 5%; 
    box-sizing: border-box;
    @media only screen and (max-width: 1025px){
        padding: 0;
        height: 50vh;
    }
`;

export const H1 = styled.div`
    text-transform: uppercase;
    border-sizing: border-box;
    margin-bottom: 0.5rem;
    @media only screen and (max-width: 1025px){
        font-size: 0.8rem;
        margin-top: 2%;
    }
`;

export const Input = styled.input`
    width: 100%;
    display: block;
    box-sizing: border-box;
    border: none;
    border-bottom: 0.1rem solid gray;
    height: 2rem;
    margin-bottom: 1rem;
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
   @media only screen and (max-width: 1025px){
       height: 5%;
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
`; 

export const Label = styled.label`
  width: 100%;
  font-size: 1rem;
  display: block;
`;

export const ErrorStyle = styled.div`
color: red;
font-weight: 500;
/* margin: 0 0 20px 0; */
margin-top: -0.8em;
`;
