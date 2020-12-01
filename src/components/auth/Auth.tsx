import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../interfaces/store.type';
import AuthForm from '../auth-form/AuthForm';
import AuthTitle from '../auth-title/AuthTitle';
import Logo from '../logo/Logo';
import TAuth from '../../interfaces/auth.type';
import { registerProp, loginProp } from './data';
import * as styled from './styled';

interface IProps {
  type: TAuth;
  onCloseAuth: () => void;
}

const Auth = ({ type, onCloseAuth }: IProps) => {
  const { email } = useSelector((state: IStore) => state.auth.user);

  return (
    <styled.Section>
      <styled.FormWrapper>
        {email && (
          <p className="confirm">
            Подтвердите Вашу регистрацию на почте. Затем залогиньтесь.
          </p>
        )}

        <Logo mb="mb-form" img="/img/logo_auth.svg" />
        <AuthTitle
          content={type === 'Регистрация' ? registerProp : loginProp}
        />
        <AuthForm type={type} onCloseAuth={onCloseAuth} />
      </styled.FormWrapper>
    </styled.Section>
  );
};

export default Auth;
