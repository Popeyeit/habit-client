import React from 'react';
import * as styled from './styled';
const HomeWelcome = () => {
  return (
    <styled.WelcomeWrapper>
      <styled.Welcome>Добро пожаловать!</styled.Welcome>
      <styled.WelcomeAuth>
        Войдите или зарегистрируйтесь, чтобы начать использовать наше приложение
      </styled.WelcomeAuth>
    </styled.WelcomeWrapper>
  );
};

export default HomeWelcome;
