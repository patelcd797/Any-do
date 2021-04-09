import React from 'react';
import styled from 'styled-components';

export const ProfileContainer = styled.div`
    width:100%;
    height: fit-content;
    padding: 0;
    margin: 0 0;
    background-color: green;
    border-sizing: border-box;
`;
export const ProfileHeader = styled.h1`
   text-align: center;
   padding: 2rem;
   margin: 0 0;
   background-color: pink;
   height: 5%; 
   border-sizing: border-box;
`;

export const ProfileBodyContainer = styled.div`
    display: flex;
    width: 100%;
    height: 87vh;
    background-color: yellow;
    border-sizing: border-box;
`;

export const ProfileDetailContainer = styled.div`
    width: 100%;
    background-color: ${ props => props.color};
    border-sizing: border-box;
`;

export const ProfileDetailEditContainer = styled.div`
    width: 100%;
    background-color: ${ props => props.color};
    border-sizing: border-box;
`;

export const Div = styled.div`
   background-color: gray;
   margin: 4% 3%;
   border-sizing: border-box;
   padding: 2%;
`;

export const FormDiv = styled(Div)`
     margin: 0% 3%;
`;
export const FormMainDiv = styled(Div)`
     margin: 2% 3%;
`;

export const H3 = styled.h3`
    display: inline-block;
    margin: 0 0;
    color: #ffff;
    word-wrap: break-word;
    box-sizing: boder-box;
    cursor: default;
`;

export const Button = styled.button`
    width: 20%;
    border-sizing: border-box;
    border:none;
    background-color: ${props => props.color};
    height: 3rem;
    color: #ffffff;
    border-radius: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
    float: right;
    margin: 0 3%;
    border-sizing: border-box;
`;

export const ClearButton = styled(Button)`
   float: left;
`;

export const Form = styled.form`
    display: block;
    border-sizing: border-box;
`;

export const Label = styled.label`
    display: inline-block;
    width: 20%;
    font-size: 1.17rem;
    font-weight: bold;
    color: #fff;
`;

export const Input = styled.input`
    display: inline-block;
    width: 75%;
    height: 1.5rem; 
    border-radius: 0.5rem;
    border: none;
    padding: 1%;
    font-size: 1.17rem;
`;

export const ErrorStyle = styled.div`
color: red;
font-weight: 500;
`;
