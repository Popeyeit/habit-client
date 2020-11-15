import React from 'react';
import * as styled from './styled';

interface IProps {
  mb?: string;
  img?: string;
}

const Logo = ({ mb = '20', img = '/img/logo_mob.svg' }: IProps) => {
  return (
    <styled.WrapperLogo className={mb}>
      <styled.Logo src={img} alt="site-logo" />
    </styled.WrapperLogo>
  );
};

export default Logo;
