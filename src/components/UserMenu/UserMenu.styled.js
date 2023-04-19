import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
 font-weight: 700;
`;

export const Welcome = styled.span`
 font-weight: 500;
 margin-right: 5px;
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  background-color: rgb(187, 196, 198 );
  padding: 5px;
  border: none;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  cursor: pointer;

  :hover, :focus {
    background-color: rgb(4, 196, 248);
    box-shadow: rgb(42, 153, 159) 0px 0px 5px 2px;
    color: rgb(255, 255, 255);
  }

`