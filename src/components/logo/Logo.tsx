import React from 'react';
import * as styled from './styled';

interface IProps {
  mb?: string;
  img?: string;
  size?: string;
}

const Logo = ({ mb = '20', img = '/img/logo_mob.svg', size = '' }: IProps) => {
  return (
    <styled.WrapperLogo className={mb}>
      <styled.Logo src={img} alt="site-logo" className={size} />
    </styled.WrapperLogo>
  );
};

export default Logo;
