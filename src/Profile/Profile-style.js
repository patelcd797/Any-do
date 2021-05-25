import styled from 'styled-components';

export const ProfileContainer = styled.div`
    width:100%;
    height: fit-content;
    padding: 0;
    margin: 0 0;
    border-sizing: border-box;
`;
export const ProfileHeader = styled.h1`
   position: sticky;
   top: 0;
   margin: 0;
   padding: 1%;
   color: #0088FF;
   background-color: #ffffff; 
   border-sizing: border-box;
   box-shadow: 0px 0 10px #585858;
   z-index: 2;
`;

export const ProfileBody = styled.div`
  display: block;
  width: 100%
  padding: 5%;
  margin: 1% 0;
  border-sizing: border-box;
`;

export const Div = styled.div`
   margin: 0;
   padding: 0.5%;
   font-size: 1.3rem;
   border-bottom: 1px solid #A8A8A8;
   border-sizing: border-box;
`;

export const Input = styled.input`
    display: inline;
    width: 95%;
    border: none;
    font-size: 1.3rem;
    outline: none;
    box-sizing: border-box;
    @media only screen and (max-width: 600px){
        width: 90%;
    }
`;

export const FormDiv = styled(Div)`
    display: float;
    justify-content: space-between;
    width: 99%;
    margin: 0% 1%;
    box-sizing: border-box;
    @media only screen and (max-width: 600px){
        display: block;
    }
`;

export const Button = styled.button`
    width: 99%;
    color: #ffffff;
    border: none;
    height: 2rem;
    margin-left: 1%;
    margin-top: 1%;
    outline: none;
    background-color: #0380fc;
    border-sizing: border-box;
`;

export const ErrorStyle = styled.div`
    width: 35%;
    color: red;
    font-weight: 500;
    box-sizing: border-box;
    @media only screen and (max-width: 600px){
        width: 100%;
    }
`;

export const Form = styled.form`
    display: block;
    border-sizing: border-box;
`;