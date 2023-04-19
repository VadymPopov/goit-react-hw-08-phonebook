import { Field,Form } from 'formik';
import styled from 'styled-components';

export const FormWrapper = styled(Form)`
  text-align: center;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  font-size: 20px;
  padding: 10px 15px;
  border: 2px solid rgb(4, 196, 248);
  border-radius: 10px;
  outline: none;

  :focus {
    border-color: #fff;
    box-shadow: rgb(42, 153, 159) 0px 0px 5px 2px;
  }
`;

export const ErrorText = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;


export const Button = styled.button`
  padding: 8px 14px;
  font-size: 20px;
  border-radius: 6px;
  border: none;
  color: #fff;
  background-color: rgb(66, 135, 245);
  cursor: pointer;

  :hover {
    background-color: rgb(4, 196, 248);
    box-shadow: rgb(42, 153, 159) 0px 0px 5px 2px;
  }
`;

export const ButtonText = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;