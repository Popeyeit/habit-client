import React from 'react';
import { Button } from '../../ui/default-component/Button';
import * as styled from './styled';

interface IProps {
  onOpenAuth: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const HomeBtn = ({ onOpenAuth }: IProps) => {
  return (
    <styled.BtnWrapper>
      <Button
        type="button"
        className="marginBottom"
        data-auth="login"
        onClick={onOpenAuth}
      >
        Вход
      </Button>
      <Button type="button" data-auth="register" onClick={onOpenAuth}>
        Регистрация
      </Button>
    </styled.BtnWrapper>
  );
};

export default HomeBtn;
