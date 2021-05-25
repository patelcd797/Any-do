import styled from 'styled-components';
import img from '../../Images/Loginpagebackground.jpg';

export const MainContainer = styled.div`
    background-image: url(${img});
    width: 100%;
    height: fit-content;
    height: 100vh;
    padding: 5%;
    box-sizing: border-box;
    @media only screen and (max-width: 1025px ){
        background-image: none;
        padding: 0%;
    }
`;

export const Form = styled.form`
    width: 60%;
    min-height: 100%;
    height: 10rem;
    margin: 0 20%;
    box-sizing: border-box;
    background-color: #ffff;
    border-radius: 4%;
    @media only screen and (max-width: 1025px ){
        width: 100%;
        margin: 0;
        border-radius: none;
        height: 100vh;
    }
`;

export const H1 = styled.h1`
     font-size: 2rem;
     font-weight: 400;
     padding: 2%;
     width: 100%;
     text-align: center;
     border-bottom: 0.5px solid black;
     box-sizing: border-box;
     @media only screen and (max-width: 1025px){
         padding: 0;
     }
`;

export const FormBody = styled.div`
    padding: 2%;
    padding-top: 10%;
`;

export const Div = styled.div`
  margin: 2rem 0;
`;
export const Label = styled.label`
    display: block;
    text-transform: uppercase;
    margin-bottom: 1rem;
`;

export const Input = styled.input`
    height: 2rem;
    width: 100%;
    display: block;
    padding: 3%;
    box-sizing: border-box;
    outline: none;
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

export const ErrorStyle = styled.div`
   color: red;
   font-weight: 500;
   margin-top: -0.8em;
   box-sizing: border-box;
`;