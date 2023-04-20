import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
 font-weight: 700;
 color: ${({theme}) => theme.hover};
`;

export const Welcome = styled.span`
 font-weight: 500;
 margin-right: 5px;
 color: ${({theme}) => theme.text};
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  background-color: rgb(187, 196, 198);
  padding: 5px;
  border: none;
  border-radius: 4px;
  color: ${({theme}) => theme.text};
  cursor: pointer;

  :hover, :focus {
    background-color:${({theme}) => theme.hover}; 
    box-shadow: ${({theme}) => theme.shadow} 0px 0px 5px 2px;
    color: ${({theme}) => theme.nav}; 
  }

`