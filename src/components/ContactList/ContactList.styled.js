import styled from "styled-components";
import {FaUserAstronaut} from 'react-icons/fa';

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
margin-left: -15px;
/* margin-top: -15px; */

`;

export const Item = styled.li`
display: flex;
flex-basis: calc(50% - 15px);
justify-content: space-between;
align-items: center;
margin-left: 15px;
/* margin-top: 15px; */
margin-bottom: 15px;
padding: 15px 15px;
border: 1px solid rgb(66, 135, 245); 
border-radius: 8px;
transition: background-color 0.25s ,box-shadow .5s cubic-bezier(.4,0,.2,1);
transition: all .25s cubic-bezier(.4,0,.2,1);

  :hover, :focus {
    background-color: rgb(4, 196, 248);
    box-shadow: rgb(42, 153, 159) 0px 0px 5px 2px;
};
`;

export const Name = styled.span`
margin-right: 10px;
color: rgb(42, 54, 59);
`;

export const Link = styled.a` 
text-decoration: none;
color: rgb(0, 0, 0);
  :hover {
    color: rgb(255, 255, 255);
  }
`;

export const IconUser = styled(FaUserAstronaut)`
color: rgb(66, 135, 245);
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
  border: 1px solid rgb(66, 135, 245);
  color: rgb(66, 135, 245);
  background-color: transparent;
  cursor: pointer;

  :hover {
    color: 	#EE4B2B;
    border-color: #EE4B2B;
  }
`;

