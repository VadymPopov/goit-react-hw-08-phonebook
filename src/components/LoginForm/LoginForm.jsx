import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormWrapper, InputContainer, Input, ErrorText, Button,ButtonText } from "../ContactForm/ContactForm.styled";
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {MdLogin} from 'react-icons/md'

const validationSchema = Yup.object().shape({
  email: Yup.string().min(10).required(),
  password: Yup.string().min(6).required(),
});

const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email:'',
    password:'',
};

  const handleSubmit = (values, actions) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    > 
      <FormWrapper>
          <InputContainer>
            <div>
              <Input name="email" type="email" placeholder="Email"  title="Email must contain an “@” symbol before the domain" />
              <FormError name="email" component='span'/>
            </div>
          </InputContainer>

          <InputContainer>
            <div>
              <Input name="password" type="password" placeholder="Password" autoComplete='off' />
              <FormError name="password" component='span'/>
            </div>
          </InputContainer>

          <Button type="submit"><ButtonText>Log In <MdLogin/></ButtonText></Button>
        </FormWrapper>
      </Formik>
  );
};