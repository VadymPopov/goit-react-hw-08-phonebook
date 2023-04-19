import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 16px;
  font-weight: 700;
  color: #2a363b;
  
  
  &.active{
    color: #fff;
    background-color: rgb(66, 135, 245);
    border-radius: 8px;
  }
`;