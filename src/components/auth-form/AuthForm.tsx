import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Button } from '../../ui/default-component/Button';
import SignupSchema from './validate';
import TAuth from '../../interfaces/auth.type';
import { registerOperation, loginOperation } from '../../redux/user/operation';
import * as styled from './styled';

interface IProps {
  onCloseAuth: () => void;
  type: TAuth;
}

const AuthForm = ({ onCloseAuth, type }: IProps) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ nickName: '', password: '', email: '' }}
      validationSchema={SignupSchema(type)}
      onSubmit={values => {
        // same shape as initial values
        type === 'Регистрация'
          ? dispatch(registerOperation(values, onCloseAuth))
          : dispatch(
              loginOperation(
                {
                  email: values.email,
                  password: values.password,
                },
                onCloseAuth,
              ),
            );
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form>
            {type === 'Регистрация' ? (
              <styled.Label>
                <Field name="nickName" placeholder="Логин..." required />
                {errors.nickName && touched.nickName ? (
                  <styled.ErrorMessage>{errors.nickName}</styled.ErrorMessage>
                ) : null}
              </styled.Label>
            ) : null}

            <styled.Label>
              <Field
                name="email"
                type="email"
                placeholder="E-mail..."
                required
              />
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
};

export default AuthForm;
