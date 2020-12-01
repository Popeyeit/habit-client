import React from 'react';
import Logo from '../logo/Logo';
import HeaderDate from '../header-date/HeaderDate';
import styled from '@emotion/styled';
import {
  MAIN_LIGHT_COLOR,
  TEXT_DARK_COLOR,
  BORDER_COLOR,
} from '../../ui/colors';

interface IProps {
  text: string;
}

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #${MAIN_LIGHT_COLOR};
  border-bottom: 1px solid #${BORDER_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h2`
  text-align: center;
  font-family: Rubik;
  font-weight: 500;
  font-size: 26px;
  line-height: 110px;
  color: #${TEXT_DARK_COLOR};
  width: calc(100% - 23.625vw * 2);
  border-left: 1px solid #${BORDER_COLOR};
  border-right: 1px solid #${BORDER_COLOR};
`;

const LogoWrapper = styled.div`
  width: 23.625vw;
`;

const Header = ({ text = 'Чек-лист привычек' }: IProps) => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo img="/img/logo_auth.svg" size="sm" mb="custom-mb" />
      </LogoWrapper>
      <Title>{text}</Title>
      <HeaderDate />
    </HeaderWrapper>
  );
};

export default Header;
