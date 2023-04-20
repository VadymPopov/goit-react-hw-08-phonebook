import styled from "styled-components";
import {FaUserAstronaut} from 'react-icons/fa';

export const Item = styled.li`
display: flex;
flex-basis: calc(50% - 15px);
justify-content: space-between;
align-items: center;
margin-left: 15px;
margin-bottom: 15px;
padding: 15px 15px;
border: 1px solid ${({theme}) => theme.main}; 
border-radius: 8px;
transition: background-color 0.25s ,box-shadow .5s cubic-bezier(.4,0,.2,1);
transition: all .25s cubic-bezier(.4,0,.2,1);

  :hover, :focus {
    background-color:  ${({theme}) => theme.hover};
    box-shadow:  ${({theme}) => theme.shadow} 0px 0px 5px 2px;
};
`;

export const Name = styled.span`
  margin-right: 10px;
  color: ${({theme}) => theme.text};
`;

export const Link = styled.a` 
text-decoration: none;
color: ${({theme}) => theme.text};
  :hover {
    color:  ${({theme}) => theme.nav};
  }
`;

export const IconUser = styled(FaUserAstronaut)`
color:  ${({theme}) => theme.main};
margin-right: 5px;
`;

export const Text = styled.p`
font-size: 20px;
font-weight: 500;
`;


export const Button = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.main};
  color: ${({theme}) => theme.main};
  background-color: transparent;
  cursor: pointer;

  :hover {
    color: 	rgb(238, 75, 43);
    border-color: rgb(238, 75, 43);
  }
`;