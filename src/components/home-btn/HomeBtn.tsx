import React from 'react';
import { Button } from '../../ui/default-component/Button';
import * as styled from './styled';
const HomeBtn = () => {
  return (
    <styled.BtnWrapper>
      <Button className="marginBottom">Вход</Button>
      <Button>Регистрация</Button>
    </styled.BtnWrapper>
  );
};

export default HomeBtn;
