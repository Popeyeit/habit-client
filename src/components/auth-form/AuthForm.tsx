import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '../../ui/default-component/Button';
import SignupSchema from './validate';
import TAuth from '../../interfaces/auth.type';
import * as styled from './styled';

interface IProps {
  onCloseAuth: () => void;
  type: TAuth;
}

const AuthForm = ({ onCloseAuth, type }: IProps) => (
  <Formik
    initialValues={{
      firstName: '',
      password: '',
      email: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={values => {
      // same shape as initial values
      console.log(values);
    }}
  >
    {({ errors, touched }) => {
      return (
        <Form>
          {type === 'Регистрация' ? (
            <styled.Label>
              <Field name="firstName" placeholder="Логин..." required />
              {errors.firstName && touched.firstName ? (
                <styled.ErrorMessage>{errors.firstName}</styled.ErrorMessage>
              ) : null}
            </styled.Label>
          ) : null}

          <styled.Label>
            <Field name="email" type="email" placeholder="E-mail..." required />
            {errors.email && touched.email ? (
              <styled.ErrorMessage>{errors.email}</styled.ErrorMessage>
            ) : null}
          </styled.Label>

          <styled.Label className="with-bg">
            <Field
              name="password"
              type="password"
              placeholder="Пароль..."
              required
            />
            {errors.password && touched.password ? (
              <styled.ErrorMessage>{errors.password}</styled.ErrorMessage>
            ) : null}
          </styled.Label>
          <styled.BtnFormWrapper>
            <Button type="submit" className="bg-green">
              {type}
            </Button>
            <Button type="button" className="to-main" onClick={onCloseAuth}>
              На главную
            </Button>
          </styled.BtnFormWrapper>
        </Form>
      );
    }}
  </Formik>
);

export default AuthForm;
