import React from "react";
import PropTypes from 'prop-types';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { Notify } from "notiflix";
import { FormWrapper, InputContainer, Input } from "../ContactForm/ContactForm.styled";
import  Button  from "components/Button";
import {ButtonContainer} from './ModalForm.styled';
import {nameRegExp, phoneRegExp, FormError} from 'utils/formik'

import {useDispatch } from "react-redux";
import { editContact } from "redux/contacts/operations";
import { useContacts } from "hooks";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).matches(nameRegExp,'Enter valid name').required(),
  number: Yup.string().matches(phoneRegExp,'Enter valid number').required(),});

const ModalForm = ({contact:{name,id,number},onClose})=> {
  const dispatch = useDispatch();
  const contacts = useContacts();

  const initialValues = {
      name:name,
      number:number,
  }
    return(
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={({name,number}, actions) =>{
          const filteredContacts = contacts.filter(item => item.id !== id);
          const isNameExist = filteredContacts.some(contact=> contact.name.toLowerCase() === name.toLowerCase());
          const isPhoneExist = filteredContacts.find(
            contact => contact.number.replace(/[^0-9]+/g, '') === number.replace(/[^0-9]+/g, '')
          );

          if (isNameExist) {
            return Notify.failure(`${name} is already in contacts`);
          };

          if (isPhoneExist) {
            return Notify.failure(`Number: ${number} is already in contacts`);
          }

            dispatch(editContact({
              id,
              name,
              number,
            }))
            onClose();
            actions.resetForm();
        }}
      > 

        <FormWrapper autoComplete="off">
          <InputContainer>
            <div>
              <Input name="name" type="text" placeholder="Full name" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />
              <FormError name="name" component='span' />
            </div>
          </InputContainer>

          <InputContainer>
            <div>
              <Input name="number" type="tel" placeholder="Phone number"  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" />
              <FormError name="number" component='span'/>
            </div>
          </InputContainer>

          <ButtonContainer>
          <Button type={"submit"}>Save</Button>
          <Button type={"submit"} onClick={onClose}>Cancel</Button>
          </ButtonContainer>
        </FormWrapper>
      </Formik>
    );
};

ModalForm.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.array,
}

export default ModalForm;