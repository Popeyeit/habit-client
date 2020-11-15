import React, { useState } from 'react';
import Container from '../../components/container/Container';
import HomeTitle from '../../components/home-title/HomeTitle';
import Logo from '../../components/logo/Logo';
import HomeWelcome from '../../components/home-welcome/HomeWelcome';
import HomeBtn from '../../components/home-btn/HomeBtn';
import Auth from '../../components/auth/Auth';
import TAuth from '../../interfaces/auth.type';
import * as styled from './styled';

const Home = () => {
  const [isAuth, setIsAuth] = useState<TAuth>('');

  const handleCloseAuth = () => {
    setIsAuth('');
  };

  const handleOpenAuth = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLElement;
    const auth = target.innerHTML;
    setIsAuth(auth);
  };

  return (
    <styled.Section>
      {isAuth && <Auth onCloseAuth={handleCloseAuth} type={isAuth} />}
      <Container>
        <HomeTitle />
        <Logo />
        <HomeWelcome />
        <HomeBtn onOpenAuth={handleOpenAuth} />
      </Container>
    </styled.Section>
  );
};

export default Home;
