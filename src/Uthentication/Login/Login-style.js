import React from 'react';
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
    height: 4rem;
    background-color: #343433;
    color: #ffffff;
    padding: 1%;
    font-size: 2rem;
    border-sizing: border-box;
`;

export const MainContainer = styled.div`
    width: 80%;
    border-sizing: border-box;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 10%;
    padding-right: 10%;
    background-image: url(${img})
`;

export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 25 1 1rem;
    border: 0.05rem solid gray;
    border-radius: 1rem;
    background-color: #ffffff;
    box-sizing: border-box;
    overflow: hidden;
    padding: 5%;
`;

export const LoginFormTitle = styled.div`
   padding-top: 2vh;
   padding-bottom: 1vh;
   padding-left: 2rem;
   color: #fffff;
   font-weight: 400;
   font-size: 2rem;
   border-sizing: border-box;
`;

export const LoginFormSubContainer = styled.div`
    display: flex;
    border-sizing: border-box;
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
    min-height: 100%;
    height: 74vh;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 10%;
    padding-bottom: 10%; 
    border-right: 0.3rem solid gray;
    box-sizing: border-box;
`;

export const H1 = styled.div`
    text-transform: uppercase;
    border-sizing: border-box;
    margin-bottom: 2rem;
`;

export const Input = styled.input`
    width: 100%;
    display: block;
    box-sizing: border-box;
    border: none;
    border-bottom: 0.1rem solid gray;
    height: 2rem;
    margin-bottom: 4rem;
`;

export const A = styled.a`
   height: 2rem;
   display: block;
   margin-bottom: 2rem;
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
`; 
export const SideContainer = styled.div`
    width: 100%;
    min-height: 100%;
    height: 74vh;
    padding-left: 5%;
    padding-top: 10%;
    padding-right: 5%;
    text-align: center;
    font-weight: 500;
    font-size: 1.5rem;
    box-sizing: border-box;
`;

export const Image = styled.image`
   display: block;
   border: 1rem solid yellow;
    width: 100%;
    height: 15rem;
   
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

export const Div =styled.div`
    margin-top: 10rem; 
`;