import styled from 'styled-components';

export const TagContainer = styled.div`
   position: absolute;
   z-index: 1;
   width: 50%;
   border-radius: 5px;
   box-sizing: border-box;
   overflow: hidden;
   box-shadow: 0 0 10px #585858
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 3px;
    background-color: ${props =>  props.backgroundColor ? props.backgroundColor : '#ffffff'};
`;

export const HeaderElements = styled.div`
    display: block;
    font-size: 1rem;
    height: 1.5rem;
    padding: 5px;
    color: #585858;
    font-weight: 600;
    box-sizing: border-box;

`;


export const TagList = styled.div`
    display: block;
    height: 1.5rem;
    color: #fffff;
    padding: 5px;
`;

export const Input = styled.input`
   height: 1.5rem;
   width: 1.5rem;
   float: right;
`;